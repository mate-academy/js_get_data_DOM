// 'use strict';
function formattingNumber(number) {
  return [...String(number).split('')]
    .reduce((previous, item, index) => {
      return (String(number).length - (index + 1)) % 3 !== 0
        ? previous + item
        : previous + item + ',';
    }, '')
    .slice(0, -1);
}

const populationArray = [...document.querySelectorAll('.population')];
const totalPopulation = populationArray.reduce((previous, item) => {
  return previous + Number(item.textContent.replaceAll(',', ''));
}, 0);
const averagePopulation = Math.round(totalPopulation / populationArray.length);

const totalPopulationFormatted = formattingNumber(totalPopulation);
const averagePopulationFormatted = formattingNumber(averagePopulation);

document.querySelector('.total-population').innerHTML =
  totalPopulationFormatted;

document.querySelector('.average-population').innerHTML =
  averagePopulationFormatted;
