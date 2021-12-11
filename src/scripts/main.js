'use strict';

function transformData(data) {
  const arrOfLetters = String(data).split('');

  for (let i = arrOfLetters.length - 3; i > 0; i = i - 3) {
    arrOfLetters.splice(i, 0, ',');
  }

  return arrOfLetters.join('');
}

const population = document.querySelectorAll('.population');
const allPopulation = [...population]
  .map(el => +el.innerText.replace(/,/g, ''));
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = allPopulation.reduce((prev, next) => prev + next, 0);
const average = total / allPopulation.length;

const totalString = transformData(total);
const averageString = transformData(average);

totalPopulation.innerText = totalString;
averagePopulation.innerText = averageString;
