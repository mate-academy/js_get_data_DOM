'use strict';

const population = document.querySelectorAll('.population');
const arrayNumbersOfPopulation = [...population].map(item =>
  Number(item.innerText.replace(/,/g, ''))
);
const totalValue = arrayNumbersOfPopulation.reduce((sum, x) => sum + x);
const averageValue = totalValue / arrayNumbersOfPopulation.length;
const totalPopulation = document.querySelector('.total-population');
const totalValueWithComa = totalValue.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const averagePopulation = document.querySelector('.average-population');
const averagePopulationWithComa = averageValue.toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

totalPopulation.remove();
document.querySelector('.total').append(totalValueWithComa);

averagePopulation.remove();
document.querySelector('.average').append(averagePopulationWithComa);
