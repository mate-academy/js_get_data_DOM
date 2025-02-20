'use strict';

// write your code here
// Task 1: get all population values

const populationElements = document.querySelectorAll('.population');
const populations = Array.from(populationElements).map((element) => {
  // Remove all comas and convert to number
  return parseInt(element.textContent.replace(/,/g, ''));
});

// Task 2: Calculate total population
const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);

// Task 3: Calculate average population
const averagePopulation = totalPopulation / populations.length;

// Task 4: Format numbers with thousands separators
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Final Task: Update HTML with calculated values
document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent =
  formatNumber(averagePopulation);
