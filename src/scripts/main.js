'use strict';

// write your code here
const spanCollection = document.querySelectorAll('.population');
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

const totalPopulation = [...spanCollection].reduce(
  (total, { textContent }) => {
    const number = Number(textContent.split(',').join(''));

    return total + number;
  }, 0);

averageEl.textContent = (totalPopulation / spanCollection.length)
  .toLocaleString('en');

totalEl.textContent = totalPopulation.toLocaleString('en');
