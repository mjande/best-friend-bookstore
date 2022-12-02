function toPriceString(float) {
  const price = float.toFixed(2);
  return `$${price}`;
}

export { toPriceString };
