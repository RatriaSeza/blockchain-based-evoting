// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.18;  

contract Election {
  address public electionAdmin;
  uint256 public totalVotes;
  uint256 public totalCandidates;
  uint256 public electionStartTime;
  uint256 public electionEndTime;

  struct Voter {
    bool isVoted;
    uint256 selectedCandidateId;
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

  // Admin Actions
  function setElectionTime(uint256 _startTime, uint256 _endTime) public onlyAdmin {
    require(_startTime < _endTime, "Invalid election time");
    electionStartTime = _startTime;
    electionEndTime = _endTime;
    emit ElectionDurationSet(_startTime, _endTime);
  }

  function addVoter(address _voter) public onlyAdmin {
    require(voters[_voter].isVoted == false && voters[_voter].selectedCandidateId == 0, "Voter already exist");

    voters[_voter] = Voter(false, 0);
    emit VoterAdded(_voter);
  }

  // Voter Actions
  function vote(uint256 _candidateId) public isElectionEnded isElectionEnded {
    require(!voters[msg.sender].isVoted, "You have already voted");
    require(candidates[_candidateId].id != 0, "Invalid candidate");

    voters[msg.sender].isVoted = true;
    voters[msg.sender].selectedCandidateId = _candidateId;
    candidates[_candidateId].voteCount++;
    totalVotes++;

    emit VoteCast(msg.sender, _candidateId);
  }

  function getCandidate(uint256 _candidateId) public view returns (Candidate memory) {
    require(candidates[_candidateId].id != 0, "Invalid candidate");
    return candidates[_candidateId];
  }

  function getVoter(address _voter) public view returns (Voter memory) {
    require(voters[_voter].isVoted == true || voters[_voter].selectedCandidateId != 0, "Voter not found");
    return voters[_voter];
  }

  function getTotalVotes() public view returns (uint256) {
    return totalVotes;
  }

  function getElectionStartTime() public view returns (uint256) {
    return electionStartTime;
  }

  function getElectionEndTime() public view returns (uint256) {
    return electionEndTime;
  }
}