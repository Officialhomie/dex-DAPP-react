import React, { useEffect, useState } from "react";
import { client, chain } from "../src/client";
import { createWallet, getWalletBalance } from "thirdweb/wallets";

type GetBalanceResult = {
  decimals: number;
  displayValue: string;
  name: string;
  symbol: string;
  value: bigint;
};


const WalletBalance = () => {
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

const shortenedAddress =
walletAddress?.substring(0, 6) +
"..." +
walletAddress?.substring(walletAddress.length - 4);

return (
  <div className="flex-col items-center justify-center mt-5 border-t border-red-500 gap-[20px]">
    <h2 className="mb-[10px] ">Token Balance</h2>

    <div className="flex items-center justify-between">
      <p>Account: {shortenedAddress ?? "No active account"}</p>
      <p>ETH Balance: {balance ? balance.displayValue : "0"} {balance ? balance.symbol : ""}</p>
    </div>
  </div>
);
};

export default WalletBalance;


