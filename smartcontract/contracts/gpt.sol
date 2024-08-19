// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Election {
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        address candidateVotedFor;
    }

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    address public electionAdmin;
    bool public electionStarted;
    bool public electionEnded;
    uint256 public totalVotes;
    uint256 public candidateCount;
    uint256 public electionStartTime;
    uint256 public electionEndTime;

    mapping(address => Voter) public voters;
    mapping(uint256 => Candidate) public candidates;

    event ElectionStarted(uint256 startTime);
    event ElectionEnded(uint256 endTime);
    event CandidateRegistered(uint256 candidateId, string name);
    event VoterAdded(address voter);
    event VoteCast(address voter, uint256 candidateId);

    modifier onlyAdmin() {
        require(msg.sender == electionAdmin, "Only admin can perform this action");
        _;
    }

    modifier electionOngoing() {
        require(block.timestamp >= electionStartTime && block.timestamp <= electionEndTime, "Election is not ongoing");
        _;
    }

    constructor() {
        electionAdmin = msg.sender;
    }

    function startElection(uint256 _startTime, uint256 _endTime) public onlyAdmin {
        require(!electionStarted, "Election already started");
        require(_startTime < _endTime, "Start time must be before end time");
        electionStarted = true;
        electionStartTime = _startTime;
        electionEndTime = _endTime;
        emit ElectionStarted(electionStartTime);
    }

    function endElection() public onlyAdmin electionOngoing {
        electionEnded = true;
        emit ElectionEnded(block.timestamp);
    }

    function registerCandidate(string memory _name) public onlyAdmin {
        require(!electionStarted, "Cannot register candidates after election has started");
        candidateCount++;
        candidates[candidateCount] = Candidate(candidateCount, _name, 0);
        emit CandidateRegistered(candidateCount, _name);
    }

    function addVoter(address _voter) public onlyAdmin {
        require(!voters[_voter].isRegistered, "Voter is already registered");
        voters[_voter] = Voter(true, false, address(0));
        emit VoterAdded(_voter);
    }

    function vote(uint256 _candidateId) public electionOngoing {
        require(voters[msg.sender].isRegistered, "You are not registered to vote");
        require(!voters[msg.sender].hasVoted, "You have already voted");
        require(candidates[_candidateId].id != 0, "Invalid candidate");

        voters[msg.sender].hasVoted = true;
        voters[msg.sender].candidateVotedFor = address(candidates[_candidateId].id);
        candidates[_candidateId].voteCount++;
        totalVotes++;

        emit VoteCast(msg.sender, _candidateId);
    }

    function getCandidate(uint256 _candidateId) public view returns (Candidate memory) {
        require(candidates[_candidateId].id != 0, "Invalid candidate");
        return candidates[_candidateId];
    }

    function getVoter(address _voter) public view returns (Voter memory) {
        require(voters[_voter].isRegistered, "Voter is not registered");
        return voters[_voter];
    }

    function getTotalVotes() public view returns (uint256) {
        return totalVotes;
    }

    function getElectionStartTime() public view returns (uint256) {
        require(electionStarted, "Election has not started yet");
        return electionStartTime;
    }

    function getElectionEndTime() public view returns (uint256) {
        require(electionEnded, "Election has not ended yet");
        return electionEndTime;
    }
}