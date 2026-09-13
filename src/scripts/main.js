'use strict';

// Get all text data from spans with the class 'population'
const populationElements = document.querySelectorAll('.population');

let totalPopulation = 0;
let validCount = 0;

// Parse the data calculate the total
populationElements.forEach((element) => {
  // Remove commas from the string to allow numeric conversion
  const rawText = element.textContent.replace(/,/g, '').trim();
  const populationValue = parseInt(rawText, 10);

  // Make sure the converted string is actually a valid number
  if (!isNaN(populationValue)) {
    totalPopulation += populationValue;
    validCount++;
  }
});

// Calculate the average population
const averagePopulation =
  validCount > 0 ? Math.round(totalPopulation / validCount) : 0;

// Target the output spans and replace their text with formatted numbers
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

if (totalElement) {
  totalElement.textContent = totalPopulation.toLocaleString('en-US');
}

if (averageElement) {
  averageElement.textContent = averagePopulation.toLocaleString('en-US');
}
