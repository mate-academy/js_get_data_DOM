'use strict';

const itemsPopulation = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const countries = document.querySelector('.list');
const countCountries = countries.children.length;

const totalPopulation = [...itemsPopulation].reduce((prev, item) => {
  const commaWithout = item.textContent.split(',');
  const content = commaWithout.join('');
  const fullNumber = Number(content);

  return fullNumber + prev;
}, 0);

const averagePopulation = (totalPopulation / countCountries);

total.textContent = totalPopulation.toLocaleString('en-US');
average.textContent = averagePopulation.toLocaleString('en-US');
