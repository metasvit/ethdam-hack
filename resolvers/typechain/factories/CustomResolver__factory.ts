/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { CustomResolver } from "../CustomResolver";

export class CustomResolver__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    settlement: string,
    lendingPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CustomResolver> {
    return super.deploy(
      settlement,
      lendingPool,
      overrides || {}
    ) as Promise<CustomResolver>;
  }
  getDeployTransaction(
    settlement: string,
    lendingPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(settlement, lendingPool, overrides || {});
  }
  attach(address: string): CustomResolver {
    return super.attach(address) as CustomResolver;
  }
  connect(signer: Signer): CustomResolver__factory {
    return super.connect(signer) as CustomResolver__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CustomResolver {
    return new Contract(address, _abi, signerOrProvider) as CustomResolver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISettlement",
        name: "settlement",
        type: "address",
      },
      {
        internalType: "contract ILendingPool",
        name: "lendingPool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "SafeTransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "tokensAndAmounts",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "resolveOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "settleOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051610a55380380610a5583398101604081905261002f91610062565b6001600160a01b039182166080521660a0523360c05261009c565b6001600160a01b038116811461005f57600080fd5b50565b6000806040838503121561007557600080fd5b82516100808161004a565b60208401519092506100918161004a565b809150509250929050565b60805160a05160c05161097e6100d760003960008181606e01526101d30152600061033401526000818160cb0152610155015261097e6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630965d04b1461003b5780631944799f14610050575b600080fd5b61004e61004936600461054a565b610063565b005b61004e61005e36600461058c565b61014a565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100b45760405162461bcd60e51b81526004016100ab9061061b565b60405180910390fd5b604051630965d04b60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630965d04b90610102908590859060040161065c565b6020604051808303816000875af1158015610121573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610145919061068b565b505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101d15760405162461bcd60e51b815260206004820152602660248201527f4f6e6c7920736574746c656d656e742063616e2063616c6c20746869732066756044820152653731ba34b7b760d11b60648201526084016100ab565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b0316146102225760405162461bcd60e51b81526004016100ab9061061b565b80156103225760008061023783850185610808565b9150915060005b825181101561031e5760008061027385848151811061025f5761025f6108c1565b60200260200101516001600160a01b031690565b6001600160a01b031684848151811061028e5761028e6108c1565b60200260200101516040516102a391906108fb565b6000604051808303816000865af19150503d80600081146102e0576040519150601f19603f3d011682016040523d82523d6000602084013e6102e5565b606091505b509150915081819061030a5760405162461bcd60e51b81526004016100ab9190610917565b505050806103179061094a565b905061023e565b5050505b836040840460005b81811015610473577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a415bcad61038c858585818110610376576103766108c1565b905060400201600001356001600160a01b031690565b85858581811061039e5761039e6108c1565b6040805160e087901b6001600160e01b03191681526001600160a01b03959095166004860152029190910160200135602483015250600060448201819052606482015230608482015260a401600060405180830381600087803b15801561040457600080fd5b505af1158015610418573d6000803e3d6000fd5b5050505061046133848484818110610432576104326108c1565b90506040020160200135610451868686818110610376576103766108c1565b6001600160a01b0316919061047d565b8061046b8161094a565b91505061032a565b5050505050505050565b6104908363a9059cbb60e01b84846104ad565b6101455760405163fb7f507960e01b815260040160405180910390fd5b60006040518481528360048201528260248201526020600060448360008a5af191505080156104f9573d80156104ef57600160005114601f3d111691506104f7565b6000863b1191505b505b949350505050565b60008083601f84011261051357600080fd5b50813567ffffffffffffffff81111561052b57600080fd5b60208301915083602082850101111561054357600080fd5b9250929050565b6000806020838503121561055d57600080fd5b823567ffffffffffffffff81111561057457600080fd5b61058085828601610501565b90969095509350505050565b6000806000806000606086880312156105a457600080fd5b85356001600160a01b03811681146105bb57600080fd5b9450602086013567ffffffffffffffff808211156105d857600080fd5b6105e489838a01610501565b909650945060408801359150808211156105fd57600080fd5b5061060a88828901610501565b969995985093965092949392505050565b60208082526021908201527f4f6e6c79206f776e65722063616e2063616c6c20746869732066756e6374696f6040820152603760f91b606082015260800190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60006020828403121561069d57600080fd5b815180151581146106ad57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156106f3576106f36106b4565b604052919050565b600067ffffffffffffffff821115610715576107156106b4565b5060051b60200190565b6000601f838184011261073157600080fd5b82356020610746610741836106fb565b6106ca565b82815260059290921b8501810191818101908784111561076557600080fd5b8287015b848110156107fc57803567ffffffffffffffff8082111561078a5760008081fd5b818a0191508a603f83011261079f5760008081fd5b858201356040828211156107b5576107b56106b4565b6107c6828b01601f191689016106ca565b92508183528c818386010111156107dd5760008081fd5b8181850189850137506000908201870152845250918301918301610769565b50979650505050505050565b6000806040838503121561081b57600080fd5b823567ffffffffffffffff8082111561083357600080fd5b818501915085601f83011261084757600080fd5b81356020610857610741836106fb565b82815260059290921b8401810191818101908984111561087657600080fd5b948201945b838610156108945785358252948201949082019061087b565b965050860135925050808211156108aa57600080fd5b506108b78582860161071f565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b60005b838110156108f25781810151838201526020016108da565b50506000910152565b6000825161090d8184602087016108d7565b9190910192915050565b60208152600082518060208401526109368160408501602087016108d7565b601f01601f19169190910160400192915050565b60006001820161096a57634e487b7160e01b600052601160045260246000fd5b506001019056fea164736f6c6343000813000a";