import React, { useEffect, useState } from "react";
import Login from "../components/Login";
import Dex from "../components/DEX";
import {  TOKEN_CONTRACT, DEX_CONTRACT } from "../src/client";
import { useActiveAccount, useActiveWallet, useReadContract } from "thirdweb/react";


export function App() {
  const wallet = useActiveAccount();

  const [contractBalance, setContractBalance] = useState<string>("0");
  const [nativeBalance, setNativeBalance] = useState<string>("0");
  const [tokenValue, setTokenValue] = useState<string>("0");
  const [currentForm, setCurrentForm] = useState<string>("native");
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() =>{
    console.log(wallet);
  },[])

  
  return (
    <>
      <div className="flex items-center justify-between w-[90%] mx-auto py-[20px]">
        <h1 className="text-5xl font-semibold text-blue-500">Homies Swap</h1>
        <Login />
      </div>

      {/* className="w-[80%] h-full mx-auto boder border-green-300" */}
      <div className="p-4 bg-blue-500 w-[90%] mx-auto mb-20 mt-20">
        {
          wallet &&
          <Dex />
        }
      </div>

      <div className="p-4 bg-blue-500 text-white">
          Thank You
      </div>

    </>
  )
}

