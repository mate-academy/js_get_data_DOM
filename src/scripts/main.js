'use strict';

const populations = document.querySelectorAll('.population');

const populationsArray = [...populations]
  .map(element => {
    const text = element.innerText;
    const number = text.split(',').join('');

    return +number;
  });

const total = populationsArray.reduce((sum, index) => sum + index, 0);
const avarage = total / populationsArray.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = total.toLocaleString('en-US');
averagePopulation.innerText = avarage.toLocaleString('en-US');
