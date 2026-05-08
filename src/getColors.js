export default function getColors(response) {
  let colorsArr = [];
  for (let i = 0; i < response.result.length; i++) {
    colorsArr.push(`rgb(${response.result[i][0]}, ${response.result[i][1]}, ${response.result[i][2]})`);
  }
  return colorsArr;
}