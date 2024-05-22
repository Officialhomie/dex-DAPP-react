import { useActiveAccount, useReadContract } from "thirdweb/react";
import {  TOKEN_CONTRACT, DEX_CONTRACT } from "../src/client";
import { readContract, resolveMethod } from "thirdweb";
import DexSymbol  from "../components/DexSymbol";
import TokenSymbol  from "../components/TokenSymbol";
import  UserTokenBalance  from "../components/UserTokenBalance";
import  TokensInContract  from "../components/TokensInContract";











    interface AmountOfTokensProps {
        inputAmount: bigint;
        inputReserve: bigint;
        outputReserve: bigint;
    }

export const AmountOfTokens: React.FC<AmountOfTokensProps> = ({ inputAmount, inputReserve, outputReserve }) => { // Binding element 'inputReserve' implicitly has an 'any' type.

    const { data: amountOfTokens, isLoading, error } = useReadContract({
    contract: DEX_CONTRACT,
    method: "getAmountOfTokens",
    params: [inputAmount, inputReserve, outputReserve]
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log("Amount of Tokens:", amountOfTokens);  

    return (
        <div>
        <div>
            <strong>Input Amount:</strong> {inputAmount.toString()}
        </div>
        <div>
            <strong>Input Reserve:</strong> {inputReserve.toString()}
        </div>
        <div>
            <strong>Output Reserve:</strong> {outputReserve.toString()}
        </div>
        </div>
    );
}


const Dex  = () => {
    // const address = useActiveAccount();

    const inputAmount = BigInt(1n);
    const inputReserve = BigInt(5n); 
    const outputReserve = BigInt(10n); 
    
    return(
        <>
            <DexSymbol />
            <TokenSymbol />
            <TokensInContract />
            <UserTokenBalance />
            <AmountOfTokens inputAmount={inputAmount} inputReserve={inputReserve} outputReserve={outputReserve} />

        </>
    )
};

export default Dex;