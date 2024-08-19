// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;  

contract Election {
  address public electionAdmin;
  uint256 public totalVotes;
  uint256 public totalCandidates;
  uint256 public electionStartTime;
  uint256 public electionEndTime;

  struct Voter {
    bool isRegistered;
    bool isVoted;
    address selectedCandidate;
  }

  struct Candidate {
    uint256 id;  
    string name;
    uint256 voteCount;
  }

  mapping(address => Voter) public voters;
  mapping(uint256 => Candidate) public candidates;

  event ElectionDurationSet(uint256 startTime, uint256 endTime);
  event CandidateAdded(uint256 candidateId, string name);
  event VoterAdded(address voter);
  event VoteCast(address voter, uint256 candidateId);

  modifier onlyAdmin() {
    require(msg.sender == electionAdmin, "Only admin can perform this action");
    _;
  }
  
  modifier isElectionStarted() {
    require(block.timestamp > electionStartTime , "Election has not started yet");
    _;
  }

  modifier isElectionEnded() {
    require(block.timestamp > electionEndTime, "Election is already ended");
    _;
  }

  constructor() {
    electionAdmin = msg.sender;
  }

  function setElectionTime(uint256 _startTime, uint256 _endTime) public onlyAdmin {
    require(_startTime < _endTime, "Invalid election time");
    electionStartTime = _startTime;
    electionEndTime = _endTime;
    emit ElectionDurationSet(_startTime, _endTime);
  }

  function addVoter(address _voter) public onlyAdmin {
    require(!voters[_voter].isRegistered, "Voter already added");
    voters[_voter].isRegistered = true;
  }

  function vote(string memory _electtionId, address _candidate, address _voter) public {}

  function getVoteCount() public view returns (uint256) {
    return totalVotes;
  }
}