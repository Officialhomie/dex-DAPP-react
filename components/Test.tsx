import React, { useEffect, useState } from "react";
import { PreparedTransaction, estimateGas, prepareContractCall, toWei } from "thirdweb";
import { TransactionButton, ConnectButton } from "thirdweb/react";
import { client, chain,  DEX_CONTRACT } from "../src/client";
import { createWallet } from "thirdweb/wallets";

const TokenSwap: React.FC = () => {
  const contract = DEX_CONTRACT;

  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const wallet = createWallet("io.metamask");
        const account = await wallet.connect({ client });
        setWalletAddress(account.address);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    connectWallet();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const myWallet = walletAddress as string;

  return (
    <>
      <TransactionButton
        transaction={async (): Promise<PreparedTransaction> => {
          const amount = "0.0002602" || "0"; // The amount of ETH to swap
          const amountInWei = toWei(amount); // Convert to BigInt
          
          const tx = await prepareContractCall({
            contract,
            method: "swapETHToToken",
            params: [],
            value: (amountInWei), // Convert BigInt to string
          });

          // const estimatedGas = await estimateGas({
          //   transaction: tx, 
          //   from: myWallet,
          // });

          const transaction: PreparedTransaction = {
            to: tx.to as string, 
            data: tx.data as `0x${string}`, 
            value: BigInt(amountInWei),
            gas: 1000n as bigint, 
            chain: chain,
            client,
          };

          return transaction;
        }}


        onTransactionSent={(result) => {
          console.log("Transaction submitted", result.transactionHash);
        }}
        onTransactionConfirmed={(receipt) => {
          console.log("Transaction confirmed", receipt.transactionHash);
        }}
        onError={(error) => {
          console.error("Transaction error", error);
        }}
      >
        Confirm Transaction
      </TransactionButton>
      <div>
        <p className="text-4xl text-pink-500 p-6 mb-4">Connected Wallet: {walletAddress ?? "No wallet connected"}</p>
      </div>
    </>
  );
};

export default TokenSwap;

