/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ITakerInteraction } from "../ITakerInteraction";

export class ITakerInteraction__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITakerInteraction {
    return new Contract(address, _abi, signerOrProvider) as ITakerInteraction;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "Address",
            name: "maker",
            type: "uint256",
          },
          {
            internalType: "Address",
            name: "receiver",
            type: "uint256",
          },
          {
            internalType: "Address",
            name: "makerAsset",
            type: "uint256",
          },
          {
            internalType: "Address",
            name: "takerAsset",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "makingAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "takingAmount",
            type: "uint256",
          },
          {
            internalType: "MakerTraits",
            name: "makerTraits",
            type: "uint256",
          },
        ],
        internalType: "struct IOrderMixin.Order",
        name: "order",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "makingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "takingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "remainingMakingAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "takerInteraction",
    outputs: [
      {
        internalType: "uint256",
        name: "offeredTakingAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
