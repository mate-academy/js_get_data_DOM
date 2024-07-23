'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

const getParsedData = (data) => {
  const parsed = data.textContent;
  const result = +parsed.replaceAll(',', '');

  return result;
};

const getSum = (data) => {
  let result = 0;

  for (const item of data) {
    result += getParsedData(item);
  }

  return result;
};

const getDataFromPopulations = () => {
  const sum = getSum(populations) || 0;
  const avarage = sum / populations.length;

  const formatedSum = sum.toLocaleString('en-US');
  const formatedAvarage = avarage.toLocaleString('en-US');

  totalPopulation.textContent = formatedSum;
  avaragePopulation.textContent = formatedAvarage;
};

getDataFromPopulations();
