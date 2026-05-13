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

function grabApiModels(resolveCallback, rejectCallback) {
  ColorService.getApiModels().then(resolveCallback, rejectCallback);
}

// UI Logic

displayButton.addEventListener("click", async function() {
  const data = callColorApi();
  console.log(data);
});

disclaimerButton.addEventListener("click", function() {
  disclaimerMenu.classList.add("hidden");
  mainContentBody.classList.remove("hidden");
});
