import React, { useEffect, useState } from "react";
import { client } from "../src/client";
import { createWallet } from "thirdweb/wallets";

const useSendTransaction = () => {
  const [transactionResult, setTransactionResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const sendTransaction = async (tx: any) => {
    setIsLoading(true);
    try {
      const wallet = createWallet("io.metamask");
      const account = await wallet.connect({ client });
      const result = await account.sendTransaction(tx);
      setTransactionResult(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate: sendTransaction,
    data: transactionResult,
    isLoading,
    error,
  };
};

export default useSendTransaction;
