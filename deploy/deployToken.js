const { network } = require("hardhat")
const { ethers } = require("@nomiclabs/hardhat-ethers")
const {
    networkConfig,
    developmentChains,
    initialAmount,
} = require("../helper-hardhat-config.js")
const { chainId } = network.config.chainId
const { verify } = require("../utils/verify.js")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    //const initialAmount = networkConfig[chainId][initialAmount];

    const myErc20 = await deploy("MyERC20", {
        from: deployer,
        args: [initialAmount],
        log: true,
    })

    log(`MyERC20 contract is deployed...`)
    log(`contract deployed at ${myErc20.address}`)
    log(`wait...verifying...`)

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(myErc20.address, [initialAmount])
        log(`congrats, verified!`)
    }
}

module.exports.tags = ["all", "myErc20"]
