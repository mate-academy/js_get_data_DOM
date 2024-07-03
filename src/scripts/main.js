'use strict';

const countriesPopulation = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const { sum, qty } = countriesPopulation.reduce(
  (acc, country) => {
    const numbers = Number(country.textContent.replace(/,/g, ''));

    acc.sum += numbers;
    acc.qty += 1;

    return acc;
  },
  {
    sum: 0,
    qty: 0,
  },
);

totalPopulation.textContent = sum.toLocaleString('en-US');
averagePopulation.textContent = (sum / qty).toLocaleString('en-US');
