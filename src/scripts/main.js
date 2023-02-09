'use strict';

const population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const total = getTotal(population);
const average = total / population.length;

function getTotal(countries) {
  return countries.reduce((acc, country) => {
    const amount = +country.textContent.replaceAll(',', '');

    return acc + amount;
  }, 0);
}

function putSeparator(number, amount, separator) {
  const inputString = String(number);
  let count = 0;
  let outputSring = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    count++;

    if (count % amount === 0 && i !== 0) {
      outputSring = separator + inputString[i] + outputSring;
    } else {
      outputSring = inputString[i] + outputSring;
    }
  }

  return outputSring;
}

totalPopulation.textContent = putSeparator(total, 3, ',');
averagePopulation.textContent = putSeparator(average, 3, ',');
