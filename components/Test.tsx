import React, { useEffect, useState } from "react";
import { readContract, getContract } from "thirdweb";
import { createWallet } from "thirdweb/wallets";
import { client, chain } from "../src/client";


// DEX contract details
const dexContractAddress = "0xD6377b270c1DB5d42187da8d38cEEf0A68c2f4b6";
const dexContractAbi = [
  // ABI details as provided
  // ...
] as const;

const DEX_CONTRACT = getContract({
  client,
  chain: chain,
  address: dexContractAddress,
  abi: dexContractAbi,
});

const EthBalance1 = () => {
  const [ethBalance, setEthBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEthBalance = async () => {
      const wallet = createWallet("io.metamask");

      try {
        const account = await wallet.connect({ client });

        const result = await readContract({
          contract: DEX_CONTRACT,
          method: "function balanceOf(address) view returns (uint256)", // Solidity method signature
          params: [account.address], // Connected wallet address
        });

        const balanceInEth = (BigInt(result) / BigInt(10 ** 18)).toString();
        setEthBalance(balanceInEth);
      } catch (err) {
        console.error("Failed to fetch ETH balance:", err); // Log the error
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEthBalance();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Contract Balance</h2>
      <p>Contract Address: {DEX_CONTRACT?.address ?? "No contract found"}</p>
      <p>DEXLP Balance of connected wallet: {ethBalance ?? "0"} DEXLP</p>
    </div>
  );
};

export default EthBalance1;
