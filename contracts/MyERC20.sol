// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol

contract MyERC20 is ERC20 {
    constructor(uint256 initialAmount) ERC20("my token", "TK") {       // ERC20() is ERC20.sol's constructor
        _mint(msg.sender, initialAmount);
    }
}
