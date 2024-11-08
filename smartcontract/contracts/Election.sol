// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;  

contract Election {
  struct Voter {
    bool hasVoted;
    uint256 vote; // candidateId chosen
  }

  address public admin;
  mapping(uint256 => uint256) public votes; // candidateId => voteCount
  mapping(string => Voter) public voters;
  uint public votersCount;

  event VoterAdded(string indexed id);
  event VoterRemoved(string indexed id);
  event VoteCast(string indexed id, uint256 candidateId);

  modifier onlyAdmin() {
    require(msg.sender == admin, "Only admin can perform this action");
    _;
  }

  constructor() {
    admin = msg.sender;
  }

  function addVoter(string memory _id) public onlyAdmin {
    require(!voters[_id].hasVoted, "Voter already added");
    
    voters[_id] = Voter({
      hasVoted: false,
      vote: 0
    });
    votersCount++;

    emit VoterAdded(_id);
  }

  function removeVoter(string memory _id) public onlyAdmin {
    require(voters[_id].hasVoted == false && voters[_id].vote == 0, "Voter not registered or already voted");

    delete voters[_id];
    votersCount--;

    emit VoterRemoved(_id);
  }

  // Voter Actions
  function vote(string memory _id, uint256 _candidateId) public {
    Voter storage voter = voters[_id];

    require(bytes(_id).length > 0, "Invalid voter ID");

    require(!voter.hasVoted, "Voter has already voted");

    voter.hasVoted = true;
    voter.vote = _candidateId;
    votes[_candidateId]++;

    emit VoteCast(_id, _candidateId);
  }

  function totalVotesFor(uint256 _candidateId) public view returns (uint256) {
    return votes[_candidateId];
  }
  
  function getVoterInfo(string memory _id) public view returns (bool, uint256) {
    Voter memory voter = voters[_id];
    return (voter.hasVoted, voter.vote);
  }
}