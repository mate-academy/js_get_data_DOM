'use strict';

// write your code here
const countries = document.querySelectorAll('span.population');
const numberArray = [];

countries.forEach((element) => {
  const populationText = element.textContent.trim();

  const populationNumber = parseFloat(populationText.replace(/,/g, ''));

  numberArray.push(populationNumber);
});

const totalValue = numberArray.reduce((sum, country) => sum + country);
const averageValue = totalValue / numberArray.length;

document.querySelector('.total-population').textContent =
  totalValue.toLocaleString();

document.querySelector('.average-population').textContent =
  averageValue.toLocaleString();
