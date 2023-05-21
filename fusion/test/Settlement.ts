import {ethers} from 'hardhat'
import {
    ONE_INCH_ROUTER_V5,
    SETTLEMENT_CONTRACT,
    TOKENS
} from './helpers/constants'
import {nowSec, parseAmount} from './helpers/utils'
import {createUsers} from './helpers/accounts'
import {
    AuctionSalt,
    AuctionSuffix,
    FusionOrder,
    NetworkEnum,
    Settlement
} from '@1inch/fusion-sdk'
import {expect} from 'chai'
import {balanceOf, encodeInfinityApprove, transfer} from './helpers/erc20'
import {OneInchApi} from './helpers/1inch'

// eslint-disable-next-line max-lines-per-function
describe('Settle Orders', function () {
    let resolverContract

    const [resolverEOA, userA] = createUsers()

    beforeEach(async function () {
        const LP = await ethers.getContractFactory('LendingPoolMock')
        const lp = await LP.deploy()

        const CustomResolver = await ethers.getContractFactory('CustomResolver')
        resolverContract = await CustomResolver.connect(
            resolverEOA.getSigner()
        ).deploy(SETTLEMENT_CONTRACT, lp.address)

        const wethAddress = TOKENS['WETH']
        const wethDonor = '0x8EB8a3b98659Cce290402893d0123abb75E3ab28'
        await ethers.provider.send('hardhat_impersonateAccount', [wethDonor])
        const tmpSigner1 = ethers.provider.getSigner(wethDonor)
        await transfer(tmpSigner1, wethAddress, lp.address, parseAmount('100'))

        const usdcAddress = TOKENS['USDC']
        const usdcDonor = '0x5041ed759Dd4aFc3a72b8192C143F72f4724081A'
        await ethers.provider.send('hardhat_impersonateAccount', [usdcDonor])
        const tmpSigner2 = ethers.provider.getSigner(wethDonor)
        await transfer(
            tmpSigner2,
            usdcAddress,
            lp.address,
            parseAmount('1000000', 6)
        )

        await userA.donorToken('WETH', parseAmount('100'))
        // await userA.donorToken("DAI", parseAmount("1000"));

        await userA.unlimitedApprove('WETH', ONE_INCH_ROUTER_V5)
        // await userB.unlimitedApprove('USDC', ONE_INCH_ROUTER_V5)
        // -- for DAI we'll use permit
        // -- for 1INCH we'll use permit
    })

    it('should resolve order through 1inch Router swap', async function () {
        const salt = new AuctionSalt({
            auctionStartTime: nowSec(),
            initialRateBump: 0,
            duration: 180,
            bankFee: '0'
        })

        const suffix = new AuctionSuffix({
            points: [],
            whitelist: [
                {
                    address: resolverEOA.address,
                    allowance: 0
                }
            ]
        })

        const orderA = new FusionOrder(
            {
                makerAsset: TOKENS.WETH,
                takerAsset: TOKENS.USDC,
                makingAmount: parseAmount('1'),
                takingAmount: parseAmount('1000', 6),
                maker: userA.address,
                allowedSender: SETTLEMENT_CONTRACT
            },
            salt,
            suffix
        )

        const settlement = new Settlement({
            resolverContract: resolverContract.address,
            settlementContract: SETTLEMENT_CONTRACT
        })

        const oneInchApi = new OneInchApi({
            url: 'https://api.1inch.io',
            network: NetworkEnum.ETHEREUM
        })

        const {tx} = await oneInchApi.requestSwapData({
            fromToken: TOKENS.WETH,
            toToken: TOKENS.USDC,
            amount: orderA.makingAmount,
            fromAddress: resolverContract.address,
            disableEstimate: true,
            slippage: 1,
            protocols: ['UNISWAP_V2']
        })

        const targets = [TOKENS.WETH, ONE_INCH_ROUTER_V5]
        const callDataList = [
            encodeInfinityApprove(ONE_INCH_ROUTER_V5),
            tx.data
        ]

        const resolverExecutionBytes = ethers.utils.defaultAbiCoder.encode(
            ['address[]', 'bytes[]'],
            [targets, callDataList]
        )

        const calldata = settlement.encodeSettleOrders(
            [
                {
                    order: orderA.build(),
                    makingAmount: parseAmount('1'),
                    takingAmount: '0',
                    thresholdAmount: parseAmount('1000', 6),
                    target: resolverContract.address,
                    signature: userA.signFusionOrder(orderA)
                }
            ],
            resolverExecutionBytes
        )

        const resolverBalanceBefore = await balanceOf(
            TOKENS.USDC,
            resolverContract.address
        )

        const transaction = await resolverEOA.sendTransaction({
            to: SETTLEMENT_CONTRACT,
            data: calldata,
            value: '0'
        })

        const receipt = await transaction.wait()

        const resolverBalanceAfter = await balanceOf(
            TOKENS.USDC,
            resolverContract.address
        )

        const balanceDiff = resolverBalanceAfter.sub(resolverBalanceBefore)

        expect(receipt.status).to.be.eq(1, 'transaction failed')
        expect(balanceDiff.gt(0), 'wrong profit').to.be.true
    })
})
