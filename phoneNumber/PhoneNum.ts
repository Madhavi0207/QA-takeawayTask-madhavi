export function generatePhoneNumber(): string {
  const prefix = "98"; // Nepal mobile prefix
  const remaining = Math.floor(10000000 + Math.random() * 90000000);

  return `${prefix}${remaining}`.slice(0, 10);
}
