/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPermit2Interface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address,address)": FunctionFragment;
    "permit(address,tuple,bytes)": FunctionFragment;
    "transferFrom(address,address,uint160,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      string,
      {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPermit2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPermit2Interface;

  functions: {
    allowance(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, number, number] & {
          amount: BigNumber;
          expiration: number;
          nonce: number;
        }
      ]
    >;

    "allowance(address,address,address)"(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, number, number] & {
          amount: BigNumber;
          expiration: number;
          nonce: number;
        }
      ]
    >;

    permit(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      user: string,
      spender: string,
      amount: BigNumberish,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint160,address)"(
      user: string,
      spender: string,
      amount: BigNumberish,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    user: string,
    token: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number] & {
      amount: BigNumber;
      expiration: number;
      nonce: number;
    }
  >;

  "allowance(address,address,address)"(
    user: string,
    token: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number] & {
      amount: BigNumber;
      expiration: number;
      nonce: number;
    }
  >;

  permit(
    owner: string,
    permitSingle: {
      details: {
        token: string;
        amount: BigNumberish;
        expiration: BigNumberish;
        nonce: BigNumberish;
      };
      spender: string;
      sigDeadline: BigNumberish;
    },
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
    owner: string,
    permitSingle: {
      details: {
        token: string;
        amount: BigNumberish;
        expiration: BigNumberish;
        nonce: BigNumberish;
      };
      spender: string;
      sigDeadline: BigNumberish;
    },
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    user: string,
    spender: string,
    amount: BigNumberish,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint160,address)"(
    user: string,
    spender: string,
    amount: BigNumberish,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        amount: BigNumber;
        expiration: number;
        nonce: number;
      }
    >;

    "allowance(address,address,address)"(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        amount: BigNumber;
        expiration: number;
        nonce: number;
      }
    >;

    permit(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferFrom(
      user: string,
      spender: string,
      amount: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferFrom(address,address,uint160,address)"(
      user: string,
      spender: string,
      amount: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    allowance(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address,address)"(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    permit(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      user: string,
      spender: string,
      amount: BigNumberish,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint160,address)"(
      user: string,
      spender: string,
      amount: BigNumberish,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address,address)"(
      user: string,
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    permit(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "permit(address,((address,uint160,uint48,uint48),address,uint256),bytes)"(
      owner: string,
      permitSingle: {
        details: {
          token: string;
          amount: BigNumberish;
          expiration: BigNumberish;
          nonce: BigNumberish;
        };
        spender: string;
        sigDeadline: BigNumberish;
      },
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      user: string,
      spender: string,
      amount: BigNumberish,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint160,address)"(
      user: string,
      spender: string,
      amount: BigNumberish,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
