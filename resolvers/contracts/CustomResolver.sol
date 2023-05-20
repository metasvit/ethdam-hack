// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "./IResolver.sol";

contract CustomResolver is IResolver {
    function resolveOrders(address resolver, bytes calldata tokensAndAmounts, bytes calldata data) external {
        // logic to resolve orders
    }
}
