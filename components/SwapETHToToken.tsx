import React from "react";
import { getContract, prepareContractCall, resolveMethod } from "thirdweb";
import { approve } from "thirdweb/extensions/erc20";
import { useSendTransaction } from "thirdweb/react";
import { DEX_CONTRACT } from "../src/client";

interface TokenSwapProps {
    contract: any;  // Define the contract type properly
    spender: string | null;
    amount: string;
}

const TokenSwap: React.FC<TokenSwapProps> = ({ contract, spender, amount }) => {
  const { mutate: sendTransaction, isPending, isError, data: transactionResult } = useSendTransaction();
  
  
  const handleSwap = async () => {
    if (parseFloat(amount) <= 0) {
      console.error("Amount must be greater than 0");
      return;
    }
    
    try {
      const swapAmount = BigInt(amount);


      const tx = prepareContractCall({
        contract: DEX_CONTRACT,
        method: "swapETHToToken",
        params: [0, ["0xd79f2Ff09A0C5fe8cEA314176Ad43601ABC29152"], spender, Math.floor(Date.now() / 1000) + 60 * 20], 
      });

      const transaction = {
        to: tx,
        data: tx.data,
        value: swapAmount.toString(), 
      };
    
      // Send the prepared transaction
      await sendTransaction(transaction); 
      console.log(transaction);
      console.error("Error swapping tokens:", error as Error);
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

