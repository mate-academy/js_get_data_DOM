'use strict';

const populations = [...document.querySelectorAll('span.population')];
// const onePopulation = document.queryElementById

const mappedPopulation = [];

populations.forEach((amount) => {
  const number = amount.textContent
    .split('')
    .filter((el) => el !== ',')
    .join('');

  mappedPopulation.push(+number);
});

const formattedNumberUS = (input) => {
  return input.toLocaleString('en-US');
};

const total = mappedPopulation.reduce(
  (accumulator, curentValue) => accumulator + curentValue,
  0,
);

const average = total / mappedPopulation.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = formattedNumberUS(total);

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = formattedNumberUS(average);
