export default function rgbToHex (response) {
  const output = [];
  for (let i = 0; i < response.result.length; i++) {
    const hexStr = "#" + response.result[i].map(value => {
      const hex = value.toString(16);
      return hex.length === 1 ? "0" + hex : hex
    }).join("");
    output.push(hexStr);
  }
  return output;
}