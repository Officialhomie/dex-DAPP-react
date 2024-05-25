import React from "react";
import { getContract, prepareContractCall, resolveMethod } from "thirdweb";
import { approve } from "thirdweb/extensions/erc20";
import { useSendTransaction } from "thirdweb/react";
import { DEX_CONTRACT, client, chain } from "../src/client";


interface TokenSwapProps {
    contract: any;  // Define the contract type properly
    spender: string;
    amount: string;
}

const TokenSwap: React.FC<TokenSwapProps> = ({ contract, spender, amount }) => {
  const { mutate: sendTransaction, isPending, isError, data: transactionResult } = useSendTransaction();
  
  
  const handleSwap = async () => {
      try {
      // Convert amount to BigInt if necessary
      const swapAmount = BigInt(amount);

      // Prepare the transaction using the approve function
      const tx = await approve({
        contract,
        spender,
        amount: swapAmount.toString()  // Convert BigInt to string
    });
    
      // Send the prepared transaction
      await sendTransaction(tx);
    } catch (error) {
        console.error("Error swapping tokens:", error);
    }
};

return (
    <div className="token-swap">
      <button onClick={handleSwap} disabled={isPending} className="swap-button">
        {isPending ? "Swapping..." : "Swap Tokens"}
      </button>
      {isError && <div className="error-message">Error: Failed to swap tokens.</div>}
      {transactionResult && <div className="success-message">Transaction successful! Hash: {transactionResult.transactionHash}</div>}
    </div>
  );
};

export default TokenSwap;

//   const handleSwap = async () => {
//     try {
    //       const swapTransaction = await prepareContractCall({
        //         contract: DEX_CONTRACT,
        //         method: "swapETHToToken", // 
        //         params: ["0xRecipientAddress", ["0xd79f2Ff09A0C5fe8cEA314176Ad43601ABC29152"], Date.now() + 1000 * 60 * 10] // Example params
        //       });
        
        //       await sendTransaction(swapTransaction);
        //     } catch (error) {
            //       console.error("Error swapping tokens:", error);
            //     }
//   };

            // const dexContractAddress = "0xYourDEXContractAddress"; // Replace with your DEX contract address
            // const dexContractAbi = [ /* Your DEX contract ABI */ ];
            
            // const DEX_CONTRACT = getContract({
            //   client,
            //   chain,
            //   address: dexContractAddress,
            //   abi: dexContractAbi,
            // });