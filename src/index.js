// Imports & Exports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ColorService from './api.js';
import getColors from './getColors';

// IDs and Consts

const disclaimerMenu = document.getElementById("disclaimer");
const mainContentBody = document.getElementById("main-body");
const disclaimerButton = document.getElementById("disclaimer-button-id");
const displayButton = document.getElementById("display-button");
// Business Logic

function grabColorList(model, resolveCallback, rejectCallback) {
  ColorService.getColorList(model).then(resolveCallback, rejectCallback);
}

// UI Logic

// function displayColors(response) {
//   const output = getColors(response);
//   const body7 = document.querySelector(".body7");
//   const p = document.createElement("p");
//   for (let i = 0; i < output.length; i++) {
//     const span = document.createElement("span");
//     span.style.color = output[i];
//     span.innerText = "aaaaa";
//     p.append(span); 
//   }
//   body7.append(p);
// }

function printError() {
  console.log("call failed");
}

function getData(response) {
  return response.result;
}

displayButton.addEventListener("click", async function() {
  const data = await grabColorList("default", getData, printError);
  console.log(data);
});

disclaimerButton.addEventListener("click", function() {
  disclaimerMenu.classList.add("hidden");
  mainContentBody.classList.remove("hidden");
});
