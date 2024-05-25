
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@thirdweb-dev/contracts/base/ERC20Base.sol";

contract DEX is ERC20Base {
    address public token;
    address public feeCollector;


    constructor(address _token, address _defaultAdmin,  address _feeCollector, string memory _name, string memory _symbol)
    ERC20Base(_defaultAdmin, _name, _symbol){
        token = _token;
        feeCollector = _feeCollector;
    }

    function getTokensInContract() public view returns (uint256) {
        return ERC20Base(token).balanceOf(address(this));
    }

    function addLiquiduty(uint256 _amount) public payable returns (uint256) {
        uint256 _liquidity;
        uint256 balanceInETH = address(this).balance;
        uint256 tokenReserve = getTokensInContract();
        ERC20Base _token = ERC20Base(token);

        // Transfer fee to fee collector
        uint256 fee = (_amount * 2) / 100;
        _amount -= fee;
        _token.transferFrom(msg.sender, feeCollector, fee);

        // first addition of liquidity
        if(tokenReserve == 0) {
            _token.transferFrom(msg.sender, address(this), _amount);
            _liquidity = balanceInETH;
            _mint(msg.sender, _amount);
        } else {
            uint256 _reservedETH = balanceInETH - msg.value;
            require (
                _amount >= (msg.value * tokenReserve) / _reservedETH,
                "Amount of tokens sent is less than the minimum tokens required"
            );
            _token.transferFrom(msg.sender, address(this), _amount);
            unchecked {
                _liquidity = (totalSupply() * msg.value) / _reservedETH;
            }
            _mint(msg.sender, _liquidity);
        }
        return _liquidity;
    }

    function removeLiquidity(uint256 _amount) public returns (uint256, uint256) {
        require(_amount > 0, 'Amount should be greater than 0' );
        uint256 _reservedETH = address(this).balance;
        uint256 _totalSupply = totalSupply();

        // Calculate the user's share of the reserves
        uint256 _ethAmount = (_reservedETH * _amount) / _totalSupply;
        uint256 _tokenAmount = (getTokensInContract() * _amount) / _totalSupply;

        // Calculate the fee (2%)
        uint256 ethFee = (_ethAmount * 2) / 100;
        uint256 tokenFee = (_tokenAmount * 2) / 100;

        // Deduct the fee from the amounts to be returned to the user
        uint256 ethAfterFee = _ethAmount - ethFee;
        uint256 tokenAfterFee = _tokenAmount - tokenFee;

        _burn(msg.sender, _amount);

        //Transfer the remaining eth and tokens to the user
        payable(msg.sender).transfer(ethAfterFee);
        ERC20Base(token).transfer(msg.sender, tokenAfterFee);
        return(ethAfterFee, tokenAfterFee);
    }

    // AMM algrithm
    function getAmountOfTokens(uint256 _inputAmount, uint256 _inputReserve, uint256 _outputReserve) public pure returns (uint256) {
        require(_inputReserve > 0 && _outputReserve > 0, "Invalid Reserves");
        
        uint256 fee = (_inputAmount * 2) / 100;
        uint256 amountAfterFee = _inputAmount - fee;
        
        uint256 numerator = amountAfterFee * _outputReserve;
        uint256 denominator = (_inputReserve * 100) + _inputAmount;
        unchecked {
            return numerator / denominator;
        }
    }

    function swapETHToToken() public payable {
        uint256 _reservedToken = getTokensInContract();
        uint256 _tokensBought = getAmountOfTokens(
            msg.value,
            address(this).balance,
            _reservedToken
        );

        // Calculate fee (2%)
        uint256 feeAmount = (_tokensBought * 2) / 100;
        uint256 tokensAfterFee = _tokensBought - feeAmount;

        // Transfer tokens after deducting the fee
        ERC20Base(token).transfer(msg.sender, tokensAfterFee);

        // Send fee to fee collector
        payable(feeCollector).transfer(feeAmount);
    }

    function swapTokenToETH(uint256 _tokenSold) public {
        uint256 _reservedTokens = getTokensInContract();
        uint256 ethBought = getAmountOfTokens(
            _tokenSold,
            address(this).balance,
            _reservedTokens
        );

        uint256 feeAmount = (ethBought * 2) / 100;
        uint256 ethAfterFee = ethBought - feeAmount;


        ERC20Base(token).transferFrom(msg.sender, address(this), _tokenSold);

        payable(msg.sender).transfer(ethAfterFee);
    }
}