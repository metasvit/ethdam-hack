// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "@1inch/solidity-utils/contracts/libraries/AddressLib.sol";
import "@1inch/solidity-utils/contracts/libraries/SafeERC20.sol";
import "./interfaces/IResolver.sol";
import "./interfaces/ISettlement.sol";
import "./interfaces/ILendingPool.sol";

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
    using SafeERC20 for IERC20;

    ISettlement private immutable _settlement;
    ILendingPool private immutable _lendingPool;
    address private immutable _owner;

    constructor(ISettlement settlement, ILendingPool lendingPool) {
        _settlement = settlement;
        _lendingPool = lendingPool;
        _owner = msg.sender;
    }

    function settleOrders(bytes calldata data) public {
        require(msg.sender == _owner, "Only owner can call this function");
        _settlement.settleOrders(data);
    }

    function resolveOrders(address resolver, bytes calldata tokensAndAmounts, bytes calldata data) external {
        require(msg.sender == address(_settlement), "Only settlement can call this function");
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
            _lendingPool.borrow(items[i].token.get(), items[i].amount, 0, 0, address(this));
            IERC20(items[i].token.get()).safeTransfer(msg.sender, items[i].amount);
        }
    }
}
