// import { ConnectButton } from "thirdweb/react";
import { client, chain } from "../src/client";
import React from "react";
import Login from "../components/Login";
import DEX from "../components/DEX";
import { useActiveAccount, useContractEvents, useReadContract } from "thirdweb/react";
import { getContract } from "thirdweb";

export function App() {
  const address = useActiveAccount();



  
  return (
    <>
      <div className="flex items-center justify-between w-[90%] mx-auto py-[20px]">
        <h1 className="text-5xl font-semibold text-green-500">Homies Swap</h1>
        <Login />
      </div>

      <div className="mt-[30px]">
        <h1>Here is my contract</h1>
        
      </div>


    </>
  );
}

function useSDK() {
  throw new Error("Function not implemented.");
}

