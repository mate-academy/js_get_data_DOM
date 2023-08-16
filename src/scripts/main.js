'use strict';

const allData = [...document.querySelectorAll('.population')]
  .map(el => el.innerHTML)
  .map(el => +el.split(',').join(''));

const totalValue = allData.reduce((prev, current) => prev + current);

const averageValue = totalValue / allData.length;

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');

total.innerHTML = totalValue.toLocaleString();
average.innerHTML = averageValue.toLocaleString();
