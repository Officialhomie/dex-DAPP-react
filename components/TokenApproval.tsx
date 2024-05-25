import React from "react";
import { approve } from "thirdweb/extensions/erc20";
import { useSendTransaction } from "thirdweb/react";
import { client, chain } from "../src/client";

interface TokenApprovalProps {
  contract: any;  // Define the contract type properly
  spender: string;
  amount: bigint;
}

const TokenApproval: React.FC<TokenApprovalProps> = ({ contract, spender, amount }) => {
  const { mutate: sendTransaction, isPending, isError, data: transactionResult } = useSendTransaction();

  const handleApproval = async () => {
    try {
      // Prepare the transaction using the approve function
      const transaction = await approve({
        contract,
        spender,
        amount: amount.toString()  // Convert bigint to string
      });

      // Send the prepared transaction
      await sendTransaction(transaction);
    } catch (error) {
      console.error("Error approving token spending:", error);
    }
  };

  return (
    <div className="token-approval">
      <button onClick={handleApproval} disabled={isPending} className="bg-green-500 text-white px-4 py-2 rounded">
        {isPending ? "Approving..." : "Approve Token"}
      </button>
      {isError && <div className="text-red-500">Error: Failed to approve token spending.</div>}
      {transactionResult && (
        <div className="text-green-500">
          Transaction successful! Hash: {transactionResult.transactionHash}
        </div>
      )}
    </div>
  );
};

export default TokenApproval;
