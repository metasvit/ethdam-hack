// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@1inch/solidity-utils/contracts/libraries/SafeERC20.sol";
import './../interfaces/ILendingPool.sol';

contract LendingPoolMock is ILendingPool {
    using SafeERC20 for IERC20;

    function deposit(
        address asset,
        uint256 amount,
        address onBehalfOf,
        uint16 referralCode
    ) external override {}

    function withdraw(
        address asset,
        uint256 amount,
        address to
    ) external override returns (uint256) {}

    function borrow(
        address asset,
        uint256 amount,
        uint256 interestRateMode,
        uint16 referralCode,
        address onBehalfOf
    ) external override {
        IERC20(asset).transfer(msg.sender, amount);
    }

    function repay(
        address asset,
        uint256 amount,
        uint256 rateMode,
        address onBehalfOf
    ) external override returns (uint256) {}

    function swapBorrowRateMode(
        address asset,
        uint256 rateMode
    ) external override {}

    function rebalanceStableBorrowRate(
        address asset,
        address user
    ) external override {}

    function setUserUseReserveAsCollateral(
        address asset,
        bool useAsCollateral
    ) external override {}

    function liquidationCall(
        address collateralAsset,
        address debtAsset,
        address user,
        uint256 debtToCover,
        bool receiveAToken
    ) external override {}

    function flashLoan(
        address receiverAddress,
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata modes,
        address onBehalfOf,
        bytes calldata params,
        uint16 referralCode
    ) external override {}

    function getUserAccountData(
        address user
    )
        external
        view
        override
        returns (
            uint256 totalCollateralETH,
            uint256 totalDebtETH,
            uint256 availableBorrowsETH,
            uint256 currentLiquidationThreshold,
            uint256 ltv,
            uint256 healthFactor
        )
    {}

    function initReserve(
        address reserve,
        address aTokenAddress,
        address stableDebtAddress,
        address variableDebtAddress,
        address interestRateStrategyAddress
    ) external override {}

    function setReserveInterestRateStrategyAddress(
        address reserve,
        address rateStrategyAddress
    ) external override {}

    function setConfiguration(
        address reserve,
        uint256 configuration
    ) external override {}

    function getConfiguration(
        address asset
    )
        external
        view
        override
        returns (DataTypes.ReserveConfigurationMap memory)
    {}

    function getUserConfiguration(
        address user
    ) external view override returns (DataTypes.UserConfigurationMap memory) {}

    function getReserveNormalizedIncome(
        address asset
    ) external view override returns (uint256) {}

    function getReserveNormalizedVariableDebt(
        address asset
    ) external view override returns (uint256) {}

    function getReserveData(
        address asset
    ) external view override returns (DataTypes.ReserveData memory) {}

    function finalizeTransfer(
        address asset,
        address from,
        address to,
        uint256 amount,
        uint256 balanceFromAfter,
        uint256 balanceToBefore
    ) external override {}

    function getReservesList()
        external
        view
        override
        returns (address[] memory)
    {}

    function getAddressesProvider()
        external
        view
        override
        returns (ILendingPoolAddressesProvider)
    {}

    function setPause(bool val) external override {}

    function paused() external view override returns (bool) {}
}