'use strict';

const populationElement = document.querySelectorAll('.population');

const populationValue = [...populationElement]
  .map(el => +el.textContent.split(',').join(''));

const correctTotalValue = populationValue.reduce((sum, n) => sum + n, 0);

document.querySelector('.total-population').textContent
= correctTotalValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.average-population').textContent
= (correctTotalValue / populationValue.length).toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
