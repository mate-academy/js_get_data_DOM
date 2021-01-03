'use strict';

const popupations = [...document.querySelectorAll('.population')]
  .map(population => +(population.innerText.split(',').join('')));

const total = popupations.reduce((prev, population) => prev + population);
const average = total / popupations.length;

function converToString(n) {
  const arr = (n + '').split('');

  for (let i = (arr.length - 3); i > 0; i -= 3) {
    arr.splice(i, 0, ',');
  }

  return arr.join('');
}

document.querySelector('.total-population').innerText = converToString(total);

document.querySelector('.average-population')
  .innerText = converToString(average);
