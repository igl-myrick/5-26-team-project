// Imports & Exports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ColorService from './api.js';
import getColors from './getColors';

// IDs and Consts



// Business Logic

function callColorApi(resolveCallback, rejectCallback) {
  ColorService.getColorList().then(resolveCallback, rejectCallback);
}

// UI Logic

