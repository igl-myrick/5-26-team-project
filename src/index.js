// Imports & Exports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ColorService from './api.js';
import getColors from './getColors.js';
import rgbToHex from './rgbToHex.js';
import hexToRgb from './hexToRgb.js';

// IDs and Consts

const disclaimerMenu = document.getElementById("disclaimer");
const mainContentBody = document.getElementById("main-body");
const disclaimerButton = document.getElementById("disclaimer-button-id");
const displayButton = document.getElementById("display-button");
const optionButton = document.getElementById("options");
const cycleUp = document.getElementById("cycle-up");
const cycleDown = document.getElementById("cycle-down");
const resetPage = document.getElementById("reset-page");
const splatterTheScreen = document.getElementById("splatter");
const colorInput1 = document.getElementById("color-input-1");
const colorInput2 = document.getElementById("color-input-2");
const colorInput3 = document.getElementById("color-input-3");
const colorInput4 = document.getElementById("color-input-4");
const colorInput5 = document.getElementById("color-input-5");
let userColorsArr = ["N", "N", "N", "N", "N"];

let currentArray = [];
let currentIndex = 0;
let currentColor = "";
// Business Logic

function grabColorList(model, colorInput, resolveCallback, rejectCallback) {
  ColorService.getColorList(model, colorInput).then(resolveCallback, rejectCallback);
}

function grabApiModels(resolveCallback, rejectCallback) {
  ColorService.getApiModels().then(resolveCallback, rejectCallback);
}

function handleModelSelection(response) {
  const modelArr = response.result;
  const rand = Math.floor(Math.random() * 6) + 1;
  grabColorList(modelArr[rand], undefined, handleArray, printError);
  grabColorList(modelArr[rand], undefined, displayColors, printError);
}

// UI Logic

function displayColors(response) {
  if (document.getElementById("error-message")) {
    document.getElementById("error-message").remove();
  }
  const output = getColors(response);
  const hexValues = rgbToHex(response);
  for (let i = 0; i < output.length; i++) {
    const palette = document.getElementById(`color${i+1}`);
    palette.style.backgroundColor = `${output[i]}`;
    palette.style.height = "40px";
    palette.classList.add("bordered-frame");
    const hexP = document.getElementById(`hex${i+1}`);
    hexP.innerText = `${hexValues[i]}`;
    hexP.style.color = `${output[i]}`;
    palette.addEventListener("click", () => handlePageChange(hexValues[i]));
  }
}

function printError() {
  if (document.getElementById("error-message")) {
    document.getElementById("error-message").remove();
  }
  const body7 = document.querySelector(".body7");
  const errorP = document.createElement("p");
  errorP.setAttribute("id", "error-message");
  errorP.style.color = "red";
  errorP.innerText = "There was an error, please try again";
  body7.append(errorP);
}

function handleArray(response) {
  currentArray = [];
  const colors = rgbToHex(response);
  for (let i = 0; i < colors.length; i++) {
    currentArray.push(colors[i]);
  }
  console.log(currentArray);
}

function handlePageChange(color) {
  currentColor = color;
  currentIndex = currentArray.indexOf(color);
  updatedSelect(currentIndex);
}

colorInput1.addEventListener("change", function(event) {
  userColorsArr[0] = hexToRgb(event.target.value);
});

colorInput2.addEventListener("change", function(event) {
  userColorsArr[1] = hexToRgb(event.target.value);
});

colorInput3.addEventListener("change", function(event) {
  userColorsArr[2] = hexToRgb(event.target.value);
});

colorInput4.addEventListener("change", function(event) {
  userColorsArr[3] = hexToRgb(event.target.value);
});

colorInput5.addEventListener("change", function(event) {
  userColorsArr[4] = hexToRgb(event.target.value);
});

function updatedSelect(index) {
  console.log(currentArray[index]);
  document.getElementById("selected-item").innerText = currentArray[index];
}

displayButton.addEventListener("click", async function() {
  return grabApiModels(handleModelSelection, printError);
});

disclaimerButton.addEventListener("click", () => {
  disclaimerMenu.classList.add("hidden");
  mainContentBody.classList.remove("hidden");
});


optionButton.addEventListener("click", () => {
  const toggledMenu = document.getElementById("mainMenu");
  toggledMenu.classList.toggle("hidden");

  if (!toggledMenu.classList.contains("hidden")) {
    optionButton.innerText = "Click Me to Hide Options";
  } else {
    optionButton.innerText = "Click me for Options";
  }
})

cycleUp.addEventListener("click", function() {
  if (currentArray.length === 0) {
    return;
  } else {
    currentIndex = (currentIndex + 1) % currentArray.length;
    updatedSelect(currentIndex);
  }
})

cycleDown.addEventListener("click", function() {
  if (currentArray.length === 0) {
    return;
  } else {
    currentIndex = (currentIndex - 1 + currentArray.length) % currentArray.length;
    updatedSelect(currentIndex);
  }
})

resetPage.addEventListener("click", function() {
  for (let i = 0; i <= 7; i++) {
    const selectedBackground = document.getElementById(`body${i}`);
    selectedBackground.style.background = "";
  }
})

splatterTheScreen.addEventListener("click", function() {
  const bodies = ["body1", "body2", "body3", "body4", "body5", "body6", "body7"];

  if (!userColorsArr.includes("N")) {
    for (let color of bodies) {
      const element = document.getElementById(`${color}`);
      const random = Math.floor(Math.random() * userColorsArr.length);
      element.style.backgroundColor = userColorsArr[random];
    }
  }
})

