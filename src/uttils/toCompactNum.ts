function toCompactNumber(num: number): string {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(num);
}

export default toCompactNumber;
