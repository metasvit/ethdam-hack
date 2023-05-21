/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISettlement } from "../ISettlement";

export class ISettlement__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISettlement {
    return new Contract(address, _abi, signerOrProvider) as ISettlement;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "availableCredit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decreaseAvailableCredit",
    outputs: [
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeBank",
    outputs: [
      {
        internalType: "contract IFeeBank",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseAvailableCredit",
    outputs: [
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "order",
        type: "bytes",
      },
    ],
    name: "settleOrders",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
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
