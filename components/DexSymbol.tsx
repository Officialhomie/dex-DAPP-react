import React from "react";
import { DEX_CONTRACT } from "../src/client";
import { useReadContract } from "thirdweb/react";



const DexSymbol = () => {
    const { data: symbol, isLoading, error } = useReadContract({ 
    contract: DEX_CONTRACT,
    method: "symbol",  // Directly using the method name
    params: [],  // No parameters needed for the symbol method
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log("Symbol:", symbol);  // Debug log for the symbol

    return (
    <div>
        Symbol: {symbol}
    </div>
    );
};

export default DexSymbol;