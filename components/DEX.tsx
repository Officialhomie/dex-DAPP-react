import { useActiveAccount, useReadContract } from "thirdweb/react";
import {  TOKEN_CONTRACT, DEX_CONTRACT } from "../src/client";



const Dex  = () => {
    const address = useActiveAccount();

    const inputAmount = BigInt(1000);
    const inputReserve = BigInt(5000); 
    const outputReserve = BigInt(10000); 

    const {data: tokensInContract, isLoading: loadingCount} = useReadContract({
        contract: DEX_CONTRACT,
        method: "getTokensInContract",
        params: [1n]
    });

    const {data: amountOfTokens, isLoading } = useReadContract({
        contract: DEX_CONTRACT,
        method: "getAmountOfTokens",
        params: [inputAmount, inputReserve, outputReserve]
    });

    return(
        <>
        </>
    )
};

export default Dex;