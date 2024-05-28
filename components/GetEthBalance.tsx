import React, { useEffect, useState } from "react";
import { useActiveWallet, useReadContract } from "thirdweb/react";
import { DEX_CONTRACT } from "../src/client";

const ContractEthBalance: React.FC = () => {
  const [balanceEth, setBalanceEth] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const activeWallet = useActiveWallet();

  // const activeWallet = useActiveWallet();  const { data: balanceWei, isLoading, error } = useReadContract({
  //   contract: DEX_CONTRACT,
  //   method: "balanceOf",
  //   params: [DEX_CONTRACT.address],
  // });


  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (activeWallet) {
          // Use `getBalance` method if available or similar method for contract's ETH balance
          const balanceWei = await useReadContract({
            contract: DEX_CONTRACT,
            method: "getBalance",
            params: [],
          });

          const balanceEth = parseFloat(balanceWei.toString()) / 1e18;
          setBalanceEth(balanceEth);
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBalance();
  }, [activeWallet]);

  // Convert the balance from Wei to ETH
  // const balanceEth = balanceWei ? parseFloat(balanceWei.toString()) / 1e18 : null;
  // console.log(balanceEth);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <p>Contract Balance: {balanceEth} ETH</p>
    </div>
  );
};

export default ContractEthBalance;






