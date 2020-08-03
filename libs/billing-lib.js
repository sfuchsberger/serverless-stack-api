export function calculateCost(storage) {
  const rate = storage <= 10
    ? 0
    : storage <= 100
      ? 2
      : 1;

  return rate * storage * 100;
}