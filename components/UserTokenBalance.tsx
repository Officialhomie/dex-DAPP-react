import React, { useEffect, useState } from "react";
import { useActiveWallet } from "thirdweb/react";
import { TOKEN_CONTRACT, chain, client } from "../src/client";
import { getWalletBalance } from "thirdweb/wallets";

// Define the type for the balance result
type GetBalanceResult = {
  decimals: number;
  displayValue: string;
  name: string;
  symbol: string;
  value: bigint;
};

const TokenBalance = () => {
  const wallet = useActiveWallet();
  const [balance, setBalance] = useState<GetBalanceResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!wallet) {
        setError(new Error("No active wallet found"));
        setIsLoading(false);
        return;
      }

      try {
        const balanceResult = await getWalletBalance({
          address: wallet.address, // Object literal may only specify known properties, and 'walletAddress' does not exist in type 'GetWalletBalanceOptions'.ts(2353), Property 'address' does not exist on type 'Wallet'.ts(2339)
          client: client,
          chain: chain,
          tokenAddress: TOKEN_CONTRACT.address,
        }) as GetBalanceResult; // Cast the result to the correct type

        setBalance(balanceResult);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBalance();
  }, [wallet]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Token Balance</h2>
      <p>Account: {wallet?.address ?? "No active account"}</p>  {/* Property 'address' does not exist on type 'Wallet'.ts(2339)  */}
      <p>Balance: {balance ? balance.displayValue : "0"} {balance ? balance.symbol : ""}</p>
    </div>
  );
};

export default TokenBalance;
