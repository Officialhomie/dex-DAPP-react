import React from "react";
import Login from "../components/Login";
import Dex from "../components/DEX";
import {  TOKEN_CONTRACT, DEX_CONTRACT } from "../src/client";
import { useActiveWallet, useReadContract } from "thirdweb/react";


export function App() {

  const wallet = useActiveWallet();



  // const {contract: tokenContract } = useReadContract(TOKEN_CONTRACT.address);
  // const {contract: dexContract } = useContract(DEX_CONTRACT.address);




  
  return (
    <>
      <div className="flex items-center justify-between w-[90%] mx-auto py-[20px]">
        <h1 className="text-5xl font-semibold text-green-500">Homies Swap</h1>
        <Login />
      </div>

      <div>
        <Dex />
      </div>

    </>
  )
}


{/* <div className="mt-[30px]">
  <h1>Here is my contract</h1>
  <div className="h-[50vh] w-[70%] mx-auto">
    <DEX />
  </div>
  
</div> */}