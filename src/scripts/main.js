'use strict';

function getPopulation() {
  const populationElements = document.querySelectorAll('span.population');
  const populationTexts = [];

  populationElements.forEach((el) => {
    populationTexts.push(el.innerText.trim());
  });

  const populationNums = populationTexts.map((text) => {
    const number = parseFloat(text.replace(/,/g, ''));

    return isNaN(number) ? 0 : number;
  });

  return populationNums;
}

const populationNumbersArray = getPopulation();

const totalSum = populationNumbersArray.reduce(
  (acc, number) => acc + number,
  0,
);

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = totalSum.toLocaleString('en-US');

const averageSum = totalSum / populationNumbersArray.length;
const averagePopulationElement = document.querySelector('.average-population');

averagePopulationElement.textContent = averageSum.toLocaleString('en-US');
