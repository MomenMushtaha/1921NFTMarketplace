// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Defining a contract named Transactions
contract Transactions {
    // Defining an event named Transfer
    // This event will be emitted when a transaction is published
    // It includes details about the sender, receiver, amount, message, timestamp, and keyword
    event Transfer (address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    // Defining a function named publishTransaction
    // This function accepts a receiver address, an amount, a message, and a keyword
    // It emits the Transfer event with the provided details
    function publishTransaction(address payable receiver, uint amount, string memory message, string memory keyword) public {
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
}