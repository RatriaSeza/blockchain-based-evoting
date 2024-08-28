// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;  

contract Election {
  struct Voter {
    bool hasVoted;
    uint256 vote;
  }

  address public admin;
  mapping(uint256 => uint256) public votes; // candidateId => voteCount
  mapping(address => Voter) public voters;
  uint public votersCount;

  // event CandidateAdded(uint256 candidateId, string name);
  event VoterAdded(address voter);
  event VoteCast(address voter, uint256 candidateId);

  modifier onlyAdmin() {
    require(msg.sender == admin, "Only admin can perform this action");
    _;
  }

  constructor() {
    admin = msg.sender;
  }

  // Voter Actions
  function vote(uint256 _candidateId) public {
    Voter storage voter = voters[msg.sender];
    require(!voter.hasVoted, "Voter has already voted");

    voter.hasVoted = true;
    voter.vote = _candidateId;

    votes[_candidateId]++;
    votersCount++;

    emit VoteCast(msg.sender, _candidateId);
  }

  function totalVotesFor(uint256 _candidateId) public view returns (uint256) {
    return votes[_candidateId];
  }

  function hasVoted(address _voter) public view returns (bool) {
    return voters[_voter].hasVoted;
  }
}