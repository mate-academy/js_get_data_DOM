'use strict';

// write your code here
const populationArray = document.querySelectorAll('.population');
let total = 0;
let count = 0;

populationArray.forEach((element) => {
  const population = parseInt(element.textContent.replace(/,/g, ''), 10) || 0;

  total += population;
  count++;
});

const average = Math.round(total / count) || 0;

document.querySelector('.total-population').textContent =
  toCorrectFormat(total);

document.querySelector('.average-population').textContent =
  toCorrectFormat(average);

function toCorrectFormat(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
