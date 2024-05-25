import React from "react";
import { DEX_CONTRACT } from "../src/client";
import { useReadContract } from "thirdweb/react";

const TokensInContract: React.FC = () => {
    
  const { data: tokensInContract, isLoading, error } = useReadContract({
    contract: DEX_CONTRACT,
    method: "getTokensInContract",
    params: [],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const tokensInEther = tokensInContract ? (tokensInContract / BigInt(10 ** 18)).toString() : "0";

  return (
    <div>
      <h2>Tokens in Contract</h2>
      <p>Tokens in Contract: {tokensInEther} DEXLP</p>
    </div>
  );
};

export default TokensInContract;
