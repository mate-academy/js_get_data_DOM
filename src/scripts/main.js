'use strict';

const populationArr = document.querySelectorAll('.population');

const populationNumb = [...populationArr].map(item =>
  +item.innerText.split(',').join(''));

const totalValue = populationNumb.reduce((sum, x) => sum + x, 0);

const averageValue = totalValue / populationNumb.length;

const total = document.querySelector('.total-population');

total.innerText = totalValue.toLocaleString();

const average = document.querySelector('.average-population');

average.innerText = averageValue.toLocaleString();
