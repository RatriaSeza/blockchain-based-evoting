import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ELECTION_START_TIME = Math.floor(Date.now() / 1000); // Current time in seconds
const ELECTION_END_TIME = ELECTION_START_TIME + 7 * 24 * 60 * 60; // One week later
const TOTAL_VOTES = 0;
const TOTAL_CANDIDATES = 0;

const ElectionModule = buildModule("ElectionModule", (m) => {
  const electionStartTime = m.getParameter("electionStartTime", ELECTION_START_TIME);
  const electionEndTime = m.getParameter("electionEndTime", ELECTION_END_TIME);
  const totalVotes = m.getParameter("totalVotes", TOTAL_VOTES);
  const totalCandidates = m.getParameter("totalCandidates", TOTAL_CANDIDATES);

  const election = m.contract("Election", []);

  return { election };
});

export default ElectionModule;