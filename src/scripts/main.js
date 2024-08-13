'use strict';

// Step 1: Get all the elements with the class 'population'
const populationSpans = document.querySelectorAll('span.population');

// Step 2: Extract the text content from each element and store it in an array
const populationNumbers = [];

for (let i = 0; i < populationSpans.length; i++) {
  const textContent = populationSpans[i].textContent; // Get the text content

  // Remove commas from the string
  const cleanedText = textContent.replace(/,/g, '');

  // Convert the cleaned string to a number
  const populationNumber = parseInt(cleanedText, 10);

  // Add the number to the array
  populationNumbers.push(populationNumber);
}
// Step 3: Calculate total and average population values

// eslint-disable-next-line max-len
const totalPopulation = populationNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
const averagePopulation = totalPopulation / populationNumbers.length;
// Step 4: Replace 'Calculate it!' with the calculated values

// Format the numbers with thousands separators
const formattedTotal = totalPopulation.toLocaleString('en-US');
const formattedAverage = averagePopulation.toLocaleString('en-US');

// Select the span elements where the results will be displayed
const totalPopulationSpan = document.querySelector('span.total-population');
const averagePopulationSpan = document.querySelector('span.average-population');

// Replace the text content with the formatted numbers
if (totalPopulationSpan) {
  totalPopulationSpan.textContent = formattedTotal;
}

if (averagePopulationSpan) {
  averagePopulationSpan.textContent = formattedAverage;
}
