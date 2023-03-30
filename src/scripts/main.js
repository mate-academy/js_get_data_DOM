'use strict';

const populations = document.querySelectorAll('.population');

const populationsArray = [...populations]
  .map(element => {
    const text = element.innerText;
    const number = text.split(',').join('');

    return +number;
  });

let total = 0;

for (const elem of populationsArray) {
  total += elem;
}

const avarage = total / populationsArray.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = total.toLocaleString('en-US');
averagePopulation.innerText = avarage.toLocaleString('en-US');
