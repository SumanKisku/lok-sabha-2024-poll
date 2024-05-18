// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Voting {
    uint private bjp = 0;
    uint private congress = 0;

    mapping(address => bool) private voted;

    function voteBjp() public {
        require(!voted[msg.sender], "You have already voted!");
        bjp += 1;
        voted[msg.sender] = true;
    }

    function voteCongress() public  {
        require(!voted[msg.sender], "You have already voted!");
        congress += 1;
        voted[msg.sender] = true;
    }

    function getVotes(address _sender) public view returns (uint[2] memory) {
        require(voted[_sender], "Vote first to see the results");
        return [bjp, congress];
    }

    function hasVoted(address _voter) public  view returns (bool) {
        return voted[_voter];
    }
}