import React from "react";
import { TOKEN_CONTRACT } from "../src/client";
import { useReadContract } from "thirdweb/react";



const TokenSymbol = () => {
    const { data: symbol, isLoading, error } = useReadContract({ 
    contract: TOKEN_CONTRACT,
    method: "symbol", 
    params: [],  
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
    <div>
        Symbol: {symbol}
    </div>
    );
};

export default TokenSymbol;