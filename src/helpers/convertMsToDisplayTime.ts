export function convertMsToDisplayTime(ms: number) {
  const seconds = (ms / 1000.0).toFixed(2);
  return `${seconds}s`;
}
