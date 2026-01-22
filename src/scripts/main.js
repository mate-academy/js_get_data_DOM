'use strict';

// write your code here
const populationArray = document.querySelectorAll('.population');
let total = 0;
let count = 0;

populationArray.forEach((element) => {
  const population = parseInt(element.textContent.replace(/,/g, ''), 10);

  total += population;
  count++;
});

const average = Math.round(total / count);

document.querySelector('.total-population').textContent =
  toCurrectFormat(total);

document.querySelector('.average-population').textContent =
  toCurrectFormat(average);

function toCurrectFormat(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
