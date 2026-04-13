'use strict';

const populationElements = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const { sum, count } = populationElements.reduce(
  (acc, current) => {
    const cleaned = current.textContent.trim().replace(/,/g, '');
    const value = Number(cleaned);

    if (Number.isNaN(value)) {
      return acc; // пропускаем невалидные
    }

    acc.sum += value;
    acc.count += 1;

    return acc;
  },
  { sum: 0, count: 0 },
);

const average = count > 0 ? Math.round(sum / count) : 0;

totalPopulationElement.textContent = sum.toLocaleString('en-US');
averagePopulationElement.textContent = average.toLocaleString('en-US');
