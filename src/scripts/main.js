'use strict';

// write your code here
const elements = {
  countriesList: [...document.querySelectorAll('.population')],
  totalPopulation: document.querySelector('.total-population'),
  averagePopulation: document.querySelector('.average-population'),
};

const getNumberFromString = (array) => {
  const customIndex = 1;

  return array.reduce((total, item, index) => {
    const currentFactor = Math.pow(1000, array.length - (customIndex + index));
    const newTotal = total + Number(item) * currentFactor;

    return newTotal;
  }, 0);
};

const totalPopulation = elements.countriesList.reduce((total, country) => {
  const population = country.textContent.split(',');

  return total + getNumberFromString(population);
}, 0);

const SplitNumberByComma = (number) => {
  const numberToArray = String(number).split('').reverse();

  const separatedArray = numberToArray
    .reduce((result, item, index, arr) => {
      const newResult =
        (index + 1) % 3 === 0 && index !== arr.length - 1
          ? result + item + ','
          : result + item;

      return newResult;
    }, '')
    .split(',');

  return separatedArray
    .reverse()
    .map((item) => item.split('').reverse().join(''))
    .join(',');
};

elements.totalPopulation.textContent = SplitNumberByComma(totalPopulation);

elements.averagePopulation.textContent = SplitNumberByComma(
  totalPopulation / elements.countriesList.length,
);
