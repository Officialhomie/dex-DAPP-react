import React, { useEffect, useState } from "react";
import { client } from "../src/client";
import { createWallet } from "thirdweb/wallets";

interface UsersWalletAddressProps {
  setSpender: (address: string) => void;
}

const UsersWalletAddress: React.FC<UsersWalletAddressProps> = ({ setSpender }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const wallet = createWallet("io.metamask");
        const account = await wallet.connect({ client });
        setWalletAddress(account.address);
        setSpender(account.address);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    connectWallet();
  }, [setSpender]); // Empty dependency array to run once on mount

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Extract first 6 characters and last 4 characters of the wallet address
  const shortenedAddress =
    walletAddress?.substring(0, 6) +
    "..." +
    walletAddress?.substring(walletAddress.length - 4);

  return (
    <div>
      <p className="text-4xl text-blue-500 p-6 mb-4">Connected Wallet: {shortenedAddress ?? "No wallet connected"}</p>
    </div>
  );
};

export default UsersWalletAddress;
