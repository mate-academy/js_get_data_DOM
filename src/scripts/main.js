'use strict';

const elements = [...document.getElementsByClassName('population')];

const populations = elements.map((el) => {
  const text = el.textContent;
  const cleanText = text.replaceAll(',', '');

  return Number(cleanText);
});

const totalPopulation = populations.reduce((acc, current) => acc + current, 0);

const averagePopulation = totalPopulation / populations.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

if (totalElement && averageElement) {
  totalElement.textContent = `${totalPopulation.toLocaleString()}`;
  averageElement.textContent = `${Math.round(averagePopulation).toLocaleString()}`;
}
