'use strict';

const populationElements = [...document.querySelectorAll('.population')];
const populationsData = populationElements.map((element) => {
  return Number(element.textContent.replaceAll(',', ''));
});
const populationsTotal = populationsData.reduce(
  (acc, current) => acc + current,
  0,
);
const populationsAvg = Math.round(populationsTotal / populationsData.length);

document.querySelector('.total-population').textContent =
  populationsTotal.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  populationsAvg.toLocaleString('en-US');
