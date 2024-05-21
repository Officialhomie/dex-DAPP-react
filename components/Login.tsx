'use client';

import React from "react";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { chain, client } from "../src/client";
import DEX from "../components/DEX";

const Login = () => {
    const account = useActiveAccount();
    return (
        <>
            <div className="flex flex-col items-center justify-center h-[100vh]">
                {account ? (
                    <div className="text-center">
                        <ConnectButton client={client} chain={chain} />
                    </div>

                ) : (
                    <div className="text-center">
                        <ConnectButton client={client} chain={chain} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Login;