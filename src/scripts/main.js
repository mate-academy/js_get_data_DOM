'use strict';

const allPopulationArray = [...document.querySelectorAll('.population')].map(
  (el) => el.innerHTML.replaceAll(',', ''),
);

const allPopulation = allPopulationArray.reduce((prevValue, currentValue) => {
  return prevValue + Number(currentValue);
}, 0);

const totalPopulationTag = document.querySelector('.total-population');

totalPopulationTag.innerHTML = allPopulation.toLocaleString('en-US');

const averagePopulationTag = document.querySelector('.average-population');

averagePopulationTag.innerHTML = (
  allPopulation / allPopulationArray.length
).toLocaleString('en-US');
