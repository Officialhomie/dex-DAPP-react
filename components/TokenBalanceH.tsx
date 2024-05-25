import React, { useEffect, useState } from "react";
import { useActiveWallet } from "thirdweb/react";
import { TOKEN_CONTRACT, chain, client } from "../src/client";
import { getWalletBalance } from "thirdweb/wallets";
import { createWallet } from "thirdweb/wallets";


// Define the type for the balance result
type GetBalanceResult = {
  decimals: number;
  displayValue: string;
  name: string;
  symbol: string;
  value: bigint;
};

const TokenBalanceH = () => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [balance, setBalance] = useState<GetBalanceResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const connectWalletAndFetchBalance = async () => {
      try {
        // Initialize and connect the wallet
        const wallet = createWallet("io.metamask" || "com.coinbase.wallet" || "me.rainbow");
        const account = await wallet.connect({ client });

        // Set the wallet address state
        setWalletAddress(account.address);

        // Fetch the token balance
        const balanceResult = await getWalletBalance({
          address: account.address,
          client: client,
          chain: chain,
          tokenAddress: TOKEN_CONTRACT.address,
        }) as GetBalanceResult;

        setBalance(balanceResult);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    connectWalletAndFetchBalance();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  const shortenedAddress = walletAddress?.substring(0, 6) + "..." +walletAddress?.substring(walletAddress.length - 4);

  return (
    <div>
      <h2>Token Balance</h2>
      <p>Account: {shortenedAddress ?? "No active account"}</p>
      <p>Balance: {balance ? balance.displayValue : "0"} {balance ? balance.symbol : ""}</p>
    </div>
  );
};

export default TokenBalanceH;
