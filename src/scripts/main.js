'use strict';

// write your code here
const populations = document.querySelectorAll('.population');
let totalPopulation = 0;
let populationCount = 0;

populations.forEach(populationElement => {
  // Make sure that the given string can be converted to a number
  const population = Number(populationElement.innerText.replace(/,/g, ''));

  if (!isNaN(population)) {
    totalPopulation += population;
    populationCount++;
  }
});

// Calculate average and total value-based to parsed numbers.
const averagePopulation = totalPopulation / populationCount;

// Replace Calculate it! with calculated average numbers in span
document.querySelector('.average-population').innerText
 = averagePopulation.toLocaleString();

document.querySelector('.total-population').innerText
 = totalPopulation.toLocaleString();
