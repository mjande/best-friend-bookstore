function floatToPriceString(float) {
  const price = float.toFixed(2);
  return `$${price}`;
}

function kebabCaseToTitleCase(string) {
  let result = string.replaceAll("-", " ");
  result = result.split(" ");
  result = result.map((word) => word.at(0).toUpperCase() + word.slice(1));
  return result.join(" ");
}

export { floatToPriceString, kebabCaseToTitleCase };
