// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Greetings {
    string public message;
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function setGreeting(string memory _message) public returns (bool) {
        message = _message;
        return true;
    }

    function getGreetngs() public view returns (string memory) {
        return message;
    }

    function deposite() public payable {}
}
