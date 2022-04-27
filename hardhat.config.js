require("@nomiclabs/hardhat-waffle");
require('@vechain.energy/hardhat-thor')

module.exports = {
 solidity: "0.8.4",
 defaultNetwork: "vechain",
 networks: {
    vechain: {
      url: 'https://testnet.veblocks.net',
      privateKey: "0x80b97e2ecfab8b1c78100c418328e8a88624e3d19928ec791a8a51cdcf01f16f",
      delegateUrl: 'https://sponsor-testnet.vechain.energy/by/90',
      blockGasLimit: 10000000
    }
  }
};