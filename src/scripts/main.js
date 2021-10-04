'use strict';

const collection = document.querySelectorAll('.population');
const arrOfPopulation = [...collection].map(x => Number(x.innerText
  .replace(/[^\w\s]|_/g, '')));

const total = arrOfPopulation.reduce((x, y) => x + y, 0);
const average = total / arrOfPopulation.length;

function separate(value) {
  const digitsArr = value.toString().split('');

  for (let i = digitsArr.length - 3; i > 0; i -= 3) {
    digitsArr.splice(i, 0, ',');
  }

  return digitsArr.join('');
}

document.querySelector('.total-population').innerText = separate(total);
document.querySelector('.average-population').innerText = separate(average);
