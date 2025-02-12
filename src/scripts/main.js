'use strict';

const populationArray = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const countriesCount = populationArray.length;
let total = 0;

populationArray.forEach((populationString) => {
  const populationNum = parseFloat(
    populationString.textContent.replace(/,/g, ''),
  );

  total += populationNum;
});

const average = Math.floor(total / countriesCount);

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
