// Imports & Exports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ColorService from './api.js';
import getColors from './getColors.js';
import rgbToHex from './rgbToHex.js';

// IDs and Consts

const disclaimerMenu = document.getElementById("disclaimer");
const mainContentBody = document.getElementById("main-body");
const disclaimerButton = document.getElementById("disclaimer-button-id");
const displayButton = document.getElementById("display-button");
const cycleDown = document.getElementById("");
const cycleUp = document.getElementById
// Business Logic

function grabColorList(model, resolveCallback, rejectCallback) {
  ColorService.getColorList(model).then(resolveCallback, rejectCallback);
}

function grabApiModels(resolveCallback, rejectCallback) {
  ColorService.getApiModels().then(resolveCallback, rejectCallback);
}

function handleModelSelection(response) {
  const modelArr = response.result;
  const rand = Math.floor(Math.random() * 6) + 1;
  grabColorList(modelArr[rand], displayColors, printError);
}

// UI Logic

function displayColors(response) {
  const output = getColors(response);
  const hexValues = rgbToHex(response);
  const body7 = document.querySelector(".body7");
  const p = document.createElement("p");
  for (let i = 0; i < output.length; i++) {
    const palette = document.getElementById(`color${i+1}`);
    palette.style.backgroundColor = `${output[i]}`;
    palette.style.height = "40px";
    const hexP = document.getElementById(`hex${i+1}`);
    hexP.innerText = `${hexValues[i]}`;
    hexP.style.color = `${output[i]}`;
  }
  body7.append(p);
}

function printError() {
  console.log("call failed");
}

displayButton.addEventListener("click", async function() {
  return grabApiModels(handleModelSelection, printError);
});

disclaimerButton.addEventListener("click", function() {
  disclaimerMenu.classList.add("hidden");
  mainContentBody.classList.remove("hidden");
});
