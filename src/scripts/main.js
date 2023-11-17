'use strict';

const allPopulationText = document.querySelectorAll('.population');
const allPopulationNumber = [...allPopulationText].map(item => (
  +item.innerText.replaceAll(',', '')));

const totalPopulation = allPopulationNumber.reduce((prev, population) => {
  return prev + population;
});
const averagePopulation = totalPopulation / allPopulationNumber.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalPopulation.toLocaleString('en-US');

average.textContent = averagePopulation.toLocaleString('en-US');
