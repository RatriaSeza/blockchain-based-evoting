export const formatTimestampDistanceToNow = (timestamp: number): string => {
  const now = new Date().getTime();
  const secondsPast = (now - timestamp * 1000) / 1000;

  if (secondsPast < 60) {
    return `${Math.floor(secondsPast)} seconds ago`;
  }
  if (secondsPast < 3600) {
    return `${Math.floor(secondsPast / 60)} minutes ago`;
  }
  if (secondsPast < 86400) {
    return `${Math.floor(secondsPast / 3600)} hours ago`;
  }
  return `${Math.floor(secondsPast / 86400)} days ago`;
}