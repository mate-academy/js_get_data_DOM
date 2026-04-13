'use strict';

const populationElements = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const total = populationElements.reduce((acc, current) => {
  const cleaned = current.textContent.trim().replace(/,/g, '');
  const value = Number(cleaned);

  if (Number.isNaN(value)) {
    return acc; // пропускаем плохие данные
  }

  return acc + value;
}, 0);

const average =
  populationElements.length > 0
    ? Math.round(total / populationElements.length)
    : 0;

totalPopulationElement.textContent = total.toLocaleString('en-US');
averagePopulationElement.textContent = average.toLocaleString('en-US');
