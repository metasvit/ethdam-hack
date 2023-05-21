import {HardhatUserConfig} from 'hardhat/config'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'

import 'hardhat-typechain'
import 'hardhat-jest-plugin'
import 'hardhat-tracer'

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    solidity: {
        compilers: [
            {
                version: '0.8.19',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    },
                    metadata: {
                        bytecodeHash: 'none'
                    }
                }
            }
        ]
    },
    networks: {
        hardhat: {
            forking: {
                // eslint-disable-next-line
                enabled: true,
                url: 'https://eth.llamarpc.com'
            },
            chainId: 1
        }
    }
}

export default config
