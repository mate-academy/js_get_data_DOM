'use strict';

let allPopulations = [...document.querySelectorAll('.population')];

allPopulations = allPopulations.map((el) => el.textContent);

const lengthPopulation = allPopulations.length;
let sumPopulations = 0;

allPopulations.forEach((population) => {
  const clearPopulation = population.replaceAll(',', '');
  const numPopulation = Number(clearPopulation);

  if (!isNaN(numPopulation)) {
    sumPopulations += numPopulation;
  }
});

const averagePopulation = Math.trunc(sumPopulations / lengthPopulation);

function addComas(number) {
  const numberArray = [...number.toString()];
  const numberWithComas = [];

  let count = 0;

  for (let i = numberArray.length - 1; i >= 0; i--) {
    numberWithComas.unshift(numberArray[i]);
    count++;

    if (count % 3 === 0 && i !== 0) {
      numberWithComas.unshift(',');
    }
  }

  return numberWithComas.join('');
}

const average = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

average.textContent = addComas(averagePopulation);
total.textContent = addComas(sumPopulations);
