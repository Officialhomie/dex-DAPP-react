import React from "react";
import { DEX_CONTRACT } from "../src/client";
import { useReadContract } from "thirdweb/react";


const TokensInContract = () => {
    const { data: tokensInContract, isLoading, error } = useReadContract({
    contract: DEX_CONTRACT,
    method: "getTokensInContract", 
    params: [1n]
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log("Tokens in Contract:", tokensInContract); 
    
    return (
        <div>
            <p>Tokens in Contract: {tokensInContract ? tokensInContract.toString() : "0"}</p>
        </div>
    );
};

export default TokensInContract;