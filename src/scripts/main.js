'use strict';

const countries = Array.from(document.getElementsByClassName('population')).map(
  (country) => Number(country.textContent.replaceAll(',', '')),
);

const total = countries.reduce((sum, country) => country + sum, 0);
const average = Math.round(total / countries.length);

const totalPopulation = document.querySelectorAll('span.total-population');

totalPopulation.forEach((el) => (el.textContent = format(total)));

const averagePopulation = document.querySelectorAll('span.average-population');

averagePopulation.forEach((el) => (el.textContent = format(average)));

function format(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
