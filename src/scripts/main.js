'use strict';

const spanCollections = document.querySelectorAll('.population');
const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

const totalPopulation = [...spanCollections].reduce(
  (total, { textContent }) => {
    const number = Number(textContent.split(',').join(''));

    return total + number;
  }, 0);

averageElement.textContent = (totalPopulation / spanCollections.length)
  .toLocaleString('en');

totalElement.textContent = totalPopulation
  .toLocaleString('en');
