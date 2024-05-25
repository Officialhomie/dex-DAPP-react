// import React from "react";
// import { useSendTransaction,  } from "thirdweb/react";
// import { prepareContractCall, resolveMethod } from "thirdweb";
// import { DEX_CONTRACT} from "../src/client"; // Make sure this path is correct

// const SwapETHToToken: React.FC = () => {
//   const { mutate: sendTransaction, isLoading, isError } = useSendTransaction(); //Property 'isLoading' does not exist on type 'UseMutationResult<{ readonly transactionHash: `0x${string}`; client: ThirdwebClient; chain: { readonly id: number; readonly name?: string | undefined; readonly rpc: string; readonly icon?: { url: string; width: number; height: number; format: string; } | undefined; readonly nativeCurrency?: { ...; } | undefined; rea...'.ts(2339)

  

//   const swapETHToToken = async () => {
//     try {
//       const transaction = await prepareContractCall({
//         contract: DEX_CONTRACT,
//         method: "swapETHToToken",
//         params: [],
//       });

//       const { transactionHash } = await sendTransaction(transaction); // Property 'transactionHash' does not exist on type 'void'.ts(2339) & transaction gives an error too

//       console.log("Transaction Hash:", transactionHash);
//     } catch (error) {
//       console.error("Error during swap:", error);
//     }
//   };

//   return (
//     <div className="p-4 bg-gray-800 text-white">
//       <h2 className="text-2xl mb-4">Swap ETH to Token</h2>
//       <button
//         onClick={swapETHToToken}
//         disabled={isLoading}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         {isLoading ? "Swapping..." : "Swap ETH to Token"}
//       </button>
//       {isError && <p className="mt-2 text-red-500">Error occurred during the swap.</p>}
//     </div>
//   );
// };

// export default SwapETHToToken;
