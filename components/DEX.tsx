import DexSymbol  from "../components/DexSymbol";
import TokenSymbol  from "../components/TokenSymbol";
import  TokenBalanceH  from "./TokenBalanceH";
import  TokenBalanceD  from "../components/TokenBalanceD";
import  TokensInContract  from "../components/TokensInContract";
import WalletBalance from "../components/WalletBalance";
import UserWalletAddress from "../components/ConnectedWallet";
import TokenApproval from "../components/TokenApproval";
import { TOKEN_CONTRACT, DEX_CONTRACT} from "../src/client";
import TokenSwap from "../components/Test"
import { useState } from "react";








const Dex  = () => {

    const contract = TOKEN_CONTRACT;  // Replace with the actual token contract address
    const spender = "0xD6377b270c1DB5d42187da8d38cEEf0A68c2f4b6";  // Replace with the actual spender address
    const amount = BigInt(100);  // Replace with the actual amount

    const [swapAmount, setSwapAmount] = useState("");
    const [ethSpender, setEthSpender] =  useState<string | null>(null); 

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSwapAmount(e.target.value);
    };
    
    return(
        <>
        <div>
            <UserWalletAddress setSpender={setEthSpender} />
            <div className="flex items-center justify-between">
                <DexSymbol  />
                <TokenSymbol />
            </div>
            <TokensInContract />
            <div className="yes flex items-center justify-between text-black bg-white">
                <TokenBalanceH />
                <TokenBalanceD />
            </div>
            <div className="border border-green-400 h-full ">
                <WalletBalance />
            </div>

            <TokenApproval contract={contract} spender={spender} amount={amount} />
            

            <div>
                <h1>Token Swap</h1>
                <input type="number" placeholder="Enter amount" value={swapAmount} min="0"
                    onChange={handleAmountChange}
                />
                {/* <TokenSwap contract={DEX_CONTRACT} spender={ethSpender || ' '} amount={swapAmount} /> */}
            </div> 

            <div className="mt-5 h-16 w-full bg-pink-700 p-4">

            </div>

            <TokenSwap/>
        </div>
        </>
    )
};

export default Dex;