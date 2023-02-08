'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const total = getTotal(population);
const average = total / population.length;

function getTotal(countries) {
  return [...countries].reduce((acc, country) => {
    const amount = Number(country.textContent.replaceAll(',', ''));

    return acc + amount;
  }, 0);
}

function putSeparator(number, amount, separator) {
  const arrayOfNumbers = String(number).split('');
  let string = '';
  let count = 0;

  for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    count++;

    if (count % amount === 0 && i !== 0) {
      string = separator + arrayOfNumbers[i] + string;
    } else {
      string = arrayOfNumbers[i] + string;
    }
  }

  return string;
}

totalPopulation.textContent = putSeparator(total, 3, ',');
averagePopulation.textContent = putSeparator(average, 3, ',');
