// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@1inch/solidity-utils/contracts/libraries/AddressLib.sol";
import "./IResolver.sol";

library Order {
    struct Data {
        Address token;
        uint256 amount;
    }

    function decode(bytes calldata cd) internal pure returns(Data[] calldata decoded) {
        assembly {
            decoded.offset := cd.offset
            decoded.length := div(cd.length, 0x40)
        }
    }
}

contract CustomResolver is IResolver {
    using AddressLib for Address;
    using Order for bytes;

    address private immutable _settlement;
    address private immutable _owner;

    constructor(address settlement) {
        _settlement = settlement;
        _owner = msg.sender;
    }

    function resolveOrders(address resolver, bytes calldata tokensAndAmounts, bytes calldata data) external {
        require(msg.sender == _settlement, "Only settlement can call this function");
        require(resolver == _owner, "Only owner can call this function");

        if (data.length > 0) {
            (Address[] memory targets, bytes[] memory calldatas) = abi.decode(data, (Address[], bytes[]));
            for (uint256 i = 0; i < targets.length; ++i) {
                // solhint-disable-next-line avoid-low-level-calls
                (bool success, bytes memory reason) = targets[i].get().call(calldatas[i]);
                require(success, string(reason));
            }
        }

        Order.Data[] calldata items = tokensAndAmounts.decode();
        for (uint256 i = 0; i < items.length; i++) {
            // logic to resolve orders
        }
    }
}
