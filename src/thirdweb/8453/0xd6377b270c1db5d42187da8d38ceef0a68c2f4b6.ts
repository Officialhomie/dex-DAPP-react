import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/

/**
 * Represents the filters for the "Approval" event.
 */
export type ApprovalEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"owner","type":"address"}>
spender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"spender","type":"address"}>
}>;

/**
 * Creates an event object for the Approval event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { approvalEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  approvalEvent({
 *  owner: ...,
 *  spender: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function approvalEvent(filters: ApprovalEventFilters = {}) {
  return prepareEvent({
    signature: "event Approval(address indexed owner, address indexed spender, uint256 value)",
    filters,
  });
};
  



/**
 * Creates an event object for the ContractURIUpdated event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { contractURIUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  contractURIUpdatedEvent()
 * ],
 * });
 * ```
 */ 
export function contractURIUpdatedEvent() {
  return prepareEvent({
    signature: "event ContractURIUpdated(string prevURI, string newURI)",
  });
};
  

/**
 * Represents the filters for the "OwnerUpdated" event.
 */
export type OwnerUpdatedEventFilters = Partial<{
  prevOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"prevOwner","type":"address"}>
newOwner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}>
}>;

/**
 * Creates an event object for the OwnerUpdated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { ownerUpdatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  ownerUpdatedEvent({
 *  prevOwner: ...,
 *  newOwner: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function ownerUpdatedEvent(filters: OwnerUpdatedEventFilters = {}) {
  return prepareEvent({
    signature: "event OwnerUpdated(address indexed prevOwner, address indexed newOwner)",
    filters,
  });
};
  

/**
 * Represents the filters for the "TokensMinted" event.
 */
export type TokensMintedEventFilters = Partial<{
  mintedTo: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"mintedTo","type":"address"}>
}>;

/**
 * Creates an event object for the TokensMinted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { tokensMintedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  tokensMintedEvent({
 *  mintedTo: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function tokensMintedEvent(filters: TokensMintedEventFilters = {}) {
  return prepareEvent({
    signature: "event TokensMinted(address indexed mintedTo, uint256 quantityMinted)",
    filters,
  });
};
  

/**
 * Represents the filters for the "Transfer" event.
 */
export type TransferEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"to","type":"address"}>
}>;

/**
 * Creates an event object for the Transfer event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { transferEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  transferEvent({
 *  from: ...,
 *  to: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function transferEvent(filters: TransferEventFilters = {}) {
  return prepareEvent({
    signature: "event Transfer(address indexed from, address indexed to, uint256 value)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "DOMAIN_SEPARATOR" function on the contract.
 * @param options - The options for the DOMAIN_SEPARATOR function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { DOMAIN_SEPARATOR } from "TODO";
 * 
 * const result = await DOMAIN_SEPARATOR();
 * 
 * ```
 */
export async function DOMAIN_SEPARATOR(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3644e515",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "admin" function on the contract.
 * @param options - The options for the admin function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { admin } from "TODO";
 * 
 * const result = await admin();
 * 
 * ```
 */
export async function admin(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf851a440",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "allowance" function.
 */
export type AllowanceParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
};

/**
 * Calls the "allowance" function on the contract.
 * @param options - The options for the allowance function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { allowance } from "TODO";
 * 
 * const result = await allowance({
 *  owner: ...,
 *  spender: ...,
 * });
 * 
 * ```
 */
export async function allowance(
  options: BaseTransactionOptions<AllowanceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xdd62ed3e",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.owner, options.spender]
  });
};


/**
 * Represents the parameters for the "balanceOf" function.
 */
export type BalanceOfParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "balanceOf" function on the contract.
 * @param options - The options for the balanceOf function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { balanceOf } from "TODO";
 * 
 * const result = await balanceOf({
 *  account: ...,
 * });
 * 
 * ```
 */
export async function balanceOf(
  options: BaseTransactionOptions<BalanceOfParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x70a08231",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.account]
  });
};




/**
 * Calls the "contractURI" function on the contract.
 * @param options - The options for the contractURI function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { contractURI } from "TODO";
 * 
 * const result = await contractURI();
 * 
 * ```
 */
export async function contractURI(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe8a3d485",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "decimals" function on the contract.
 * @param options - The options for the decimals function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { decimals } from "TODO";
 * 
 * const result = await decimals();
 * 
 * ```
 */
export async function decimals(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x313ce567",
  [],
  [
    {
      "internalType": "uint8",
      "name": "",
      "type": "uint8"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "feeCollector" function on the contract.
 * @param options - The options for the feeCollector function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { feeCollector } from "TODO";
 * 
 * const result = await feeCollector();
 * 
 * ```
 */
export async function feeCollector(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc415b95c",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getAmountOfTokens" function.
 */
export type GetAmountOfTokensParams = {
  inputAmount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_inputAmount","type":"uint256"}>
inputReserve: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_inputReserve","type":"uint256"}>
outputReserve: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_outputReserve","type":"uint256"}>
};

/**
 * Calls the "getAmountOfTokens" function on the contract.
 * @param options - The options for the getAmountOfTokens function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAmountOfTokens } from "TODO";
 * 
 * const result = await getAmountOfTokens({
 *  inputAmount: ...,
 *  inputReserve: ...,
 *  outputReserve: ...,
 * });
 * 
 * ```
 */
export async function getAmountOfTokens(
  options: BaseTransactionOptions<GetAmountOfTokensParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x7386479e",
  [
    {
      "internalType": "uint256",
      "name": "_inputAmount",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "_inputReserve",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "_outputReserve",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.inputAmount, options.inputReserve, options.outputReserve]
  });
};




/**
 * Calls the "getTokensInContract" function on the contract.
 * @param options - The options for the getTokensInContract function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getTokensInContract } from "TODO";
 * 
 * const result = await getTokensInContract();
 * 
 * ```
 */
export async function getTokensInContract(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3c2f1806",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "name" function on the contract.
 * @param options - The options for the name function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { name } from "TODO";
 * 
 * const result = await name();
 * 
 * ```
 */
export async function name(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x06fdde03",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "nonces" function.
 */
export type NoncesParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
};

/**
 * Calls the "nonces" function on the contract.
 * @param options - The options for the nonces function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { nonces } from "TODO";
 * 
 * const result = await nonces({
 *  owner: ...,
 * });
 * 
 * ```
 */
export async function nonces(
  options: BaseTransactionOptions<NoncesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x7ecebe00",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.owner]
  });
};




/**
 * Calls the "owner" function on the contract.
 * @param options - The options for the owner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { owner } from "TODO";
 * 
 * const result = await owner();
 * 
 * ```
 */
export async function owner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8da5cb5b",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "symbol" function on the contract.
 * @param options - The options for the symbol function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { symbol } from "TODO";
 * 
 * const result = await symbol();
 * 
 * ```
 */
export async function symbol(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x95d89b41",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "token" function on the contract.
 * @param options - The options for the token function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { token } from "TODO";
 * 
 * const result = await token();
 * 
 * ```
 */
export async function token(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xfc0c546a",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "totalSupply" function on the contract.
 * @param options - The options for the totalSupply function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalSupply } from "TODO";
 * 
 * const result = await totalSupply();
 * 
 * ```
 */
export async function totalSupply(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x18160ddd",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "addLiquidity" function.
 */
export type AddLiquidityParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_amount","type":"uint256"}>
};

/**
 * Calls the "addLiquidity" function on the contract.
 * @param options - The options for the "addLiquidity" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { addLiquidity } from "TODO";
 * 
 * const transaction = addLiquidity({
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function addLiquidity(
  options: BaseTransactionOptions<AddLiquidityParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x51c6590a",
  [
    {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.amount]
  });
};


/**
 * Represents the parameters for the "approve" function.
 */
export type ApproveParams = {
  spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "approve" function on the contract.
 * @param options - The options for the "approve" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { approve } from "TODO";
 * 
 * const transaction = approve({
 *  spender: ...,
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function approve(
  options: BaseTransactionOptions<ApproveParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x095ea7b3",
  [
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.spender, options.amount]
  });
};


/**
 * Represents the parameters for the "burn" function.
 */
export type BurnParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_amount","type":"uint256"}>
};

/**
 * Calls the "burn" function on the contract.
 * @param options - The options for the "burn" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { burn } from "TODO";
 * 
 * const transaction = burn({
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function burn(
  options: BaseTransactionOptions<BurnParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x42966c68",
  [
    {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.amount]
  });
};


/**
 * Represents the parameters for the "burnFrom" function.
 */
export type BurnFromParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"_account","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_amount","type":"uint256"}>
};

/**
 * Calls the "burnFrom" function on the contract.
 * @param options - The options for the "burnFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { burnFrom } from "TODO";
 * 
 * const transaction = burnFrom({
 *  account: ...,
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function burnFrom(
  options: BaseTransactionOptions<BurnFromParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x79cc6790",
  [
    {
      "internalType": "address",
      "name": "_account",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.account, options.amount]
  });
};


/**
 * Represents the parameters for the "decreaseAllowance" function.
 */
export type DecreaseAllowanceParams = {
  spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
subtractedValue: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"subtractedValue","type":"uint256"}>
};

/**
 * Calls the "decreaseAllowance" function on the contract.
 * @param options - The options for the "decreaseAllowance" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { decreaseAllowance } from "TODO";
 * 
 * const transaction = decreaseAllowance({
 *  spender: ...,
 *  subtractedValue: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function decreaseAllowance(
  options: BaseTransactionOptions<DecreaseAllowanceParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa457c2d7",
  [
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "subtractedValue",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.spender, options.subtractedValue]
  });
};


/**
 * Represents the parameters for the "increaseAllowance" function.
 */
export type IncreaseAllowanceParams = {
  spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
addedValue: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"addedValue","type":"uint256"}>
};

/**
 * Calls the "increaseAllowance" function on the contract.
 * @param options - The options for the "increaseAllowance" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { increaseAllowance } from "TODO";
 * 
 * const transaction = increaseAllowance({
 *  spender: ...,
 *  addedValue: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function increaseAllowance(
  options: BaseTransactionOptions<IncreaseAllowanceParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x39509351",
  [
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "addedValue",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.spender, options.addedValue]
  });
};


/**
 * Represents the parameters for the "mintTo" function.
 */
export type MintToParams = {
  to: AbiParameterToPrimitiveType<{"internalType":"address","name":"_to","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_amount","type":"uint256"}>
};

/**
 * Calls the "mintTo" function on the contract.
 * @param options - The options for the "mintTo" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { mintTo } from "TODO";
 * 
 * const transaction = mintTo({
 *  to: ...,
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function mintTo(
  options: BaseTransactionOptions<MintToParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x449a52f8",
  [
    {
      "internalType": "address",
      "name": "_to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.to, options.amount]
  });
};


/**
 * Represents the parameters for the "multicall" function.
 */
export type MulticallParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes[]","name":"data","type":"bytes[]"}>
};

/**
 * Calls the "multicall" function on the contract.
 * @param options - The options for the "multicall" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multicall } from "TODO";
 * 
 * const transaction = multicall({
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function multicall(
  options: BaseTransactionOptions<MulticallParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xac9650d8",
  [
    {
      "internalType": "bytes[]",
      "name": "data",
      "type": "bytes[]"
    }
  ],
  [
    {
      "internalType": "bytes[]",
      "name": "results",
      "type": "bytes[]"
    }
  ]
],
    params: [options.data]
  });
};


/**
 * Represents the parameters for the "permit" function.
 */
export type PermitParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
value: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"value","type":"uint256"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"deadline","type":"uint256"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"v","type":"uint8"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"r","type":"bytes32"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"s","type":"bytes32"}>
};

/**
 * Calls the "permit" function on the contract.
 * @param options - The options for the "permit" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { permit } from "TODO";
 * 
 * const transaction = permit({
 *  owner: ...,
 *  spender: ...,
 *  value: ...,
 *  deadline: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function permit(
  options: BaseTransactionOptions<PermitParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd505accf",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "deadline",
      "type": "uint256"
    },
    {
      "internalType": "uint8",
      "name": "v",
      "type": "uint8"
    },
    {
      "internalType": "bytes32",
      "name": "r",
      "type": "bytes32"
    },
    {
      "internalType": "bytes32",
      "name": "s",
      "type": "bytes32"
    }
  ],
  []
],
    params: [options.owner, options.spender, options.value, options.deadline, options.v, options.r, options.s]
  });
};


/**
 * Represents the parameters for the "removeLiquidity" function.
 */
export type RemoveLiquidityParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_amount","type":"uint256"}>
};

/**
 * Calls the "removeLiquidity" function on the contract.
 * @param options - The options for the "removeLiquidity" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { removeLiquidity } from "TODO";
 * 
 * const transaction = removeLiquidity({
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function removeLiquidity(
  options: BaseTransactionOptions<RemoveLiquidityParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x9c8f9f23",
  [
    {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.amount]
  });
};


/**
 * Represents the parameters for the "setContractURI" function.
 */
export type SetContractURIParams = {
  uri: AbiParameterToPrimitiveType<{"internalType":"string","name":"_uri","type":"string"}>
};

/**
 * Calls the "setContractURI" function on the contract.
 * @param options - The options for the "setContractURI" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setContractURI } from "TODO";
 * 
 * const transaction = setContractURI({
 *  uri: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setContractURI(
  options: BaseTransactionOptions<SetContractURIParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x938e3d7b",
  [
    {
      "internalType": "string",
      "name": "_uri",
      "type": "string"
    }
  ],
  []
],
    params: [options.uri]
  });
};


/**
 * Represents the parameters for the "setFeeCollector" function.
 */
export type SetFeeCollectorParams = {
  newFeeCollector: AbiParameterToPrimitiveType<{"internalType":"address","name":"_newFeeCollector","type":"address"}>
};

/**
 * Calls the "setFeeCollector" function on the contract.
 * @param options - The options for the "setFeeCollector" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setFeeCollector } from "TODO";
 * 
 * const transaction = setFeeCollector({
 *  newFeeCollector: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setFeeCollector(
  options: BaseTransactionOptions<SetFeeCollectorParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa42dce80",
  [
    {
      "internalType": "address",
      "name": "_newFeeCollector",
      "type": "address"
    }
  ],
  []
],
    params: [options.newFeeCollector]
  });
};


/**
 * Represents the parameters for the "setOwner" function.
 */
export type SetOwnerParams = {
  newOwner: AbiParameterToPrimitiveType<{"internalType":"address","name":"_newOwner","type":"address"}>
};

/**
 * Calls the "setOwner" function on the contract.
 * @param options - The options for the "setOwner" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setOwner } from "TODO";
 * 
 * const transaction = setOwner({
 *  newOwner: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setOwner(
  options: BaseTransactionOptions<SetOwnerParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x13af4035",
  [
    {
      "internalType": "address",
      "name": "_newOwner",
      "type": "address"
    }
  ],
  []
],
    params: [options.newOwner]
  });
};




/**
 * Calls the "swapETHToToken" function on the contract.
 * @param options - The options for the "swapETHToToken" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { swapETHToToken } from "TODO";
 * 
 * const transaction = swapETHToToken();
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function swapETHToToken(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xb5d62d4d",
  [],
  []
],
    params: []
  });
};


/**
 * Represents the parameters for the "swapTokenToETH" function.
 */
export type SwapTokenToETHParams = {
  tokenSold: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_tokenSold","type":"uint256"}>
};

/**
 * Calls the "swapTokenToETH" function on the contract.
 * @param options - The options for the "swapTokenToETH" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { swapTokenToETH } from "TODO";
 * 
 * const transaction = swapTokenToETH({
 *  tokenSold: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function swapTokenToETH(
  options: BaseTransactionOptions<SwapTokenToETHParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x0ea21fa4",
  [
    {
      "internalType": "uint256",
      "name": "_tokenSold",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.tokenSold]
  });
};


/**
 * Represents the parameters for the "transfer" function.
 */
export type TransferParams = {
  to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "transfer" function on the contract.
 * @param options - The options for the "transfer" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transfer } from "TODO";
 * 
 * const transaction = transfer({
 *  to: ...,
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function transfer(
  options: BaseTransactionOptions<TransferParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa9059cbb",
  [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.to, options.amount]
  });
};


/**
 * Represents the parameters for the "transferFrom" function.
 */
export type TransferFromParams = {
  from: AbiParameterToPrimitiveType<{"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "transferFrom" function on the contract.
 * @param options - The options for the "transferFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferFrom } from "TODO";
 * 
 * const transaction = transferFrom({
 *  from: ...,
 *  to: ...,
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function transferFrom(
  options: BaseTransactionOptions<TransferFromParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x23b872dd",
  [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.from, options.to, options.amount]
  });
};


