'use strict';

// write your code here

const population = document.querySelectorAll(`.population`);
const totalPopulation = document.querySelector(`.total-population`);
const avaragePopulation = document.querySelector(`.average-population`);

const countries = [...population].map(number => {
  const str = number.innerHTML.replaceAll(',', '');

  return Number(str);
});

const total = countries.reduce((prev, curr) => prev + curr);
const avarage = total / countries.length;

totalPopulation.innerHTML = total.toLocaleString(`en`);
avaragePopulation.innerHTML = avarage.toLocaleString(`en`);
