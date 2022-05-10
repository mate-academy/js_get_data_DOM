'use strict';

const data = document.querySelectorAll('.population');
const numbersArray = [...data].map(
  item => Number(item.textContent.split(',').join(''))
);

const totalNumber = numbersArray.reduce((sum, item) => sum + item, 0);
const averageNumber = totalNumber / numbersArray.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const newFormat = new Intl.NumberFormat('en-US');

total.textContent = newFormat.format(totalNumber);
average.textContent = newFormat.format(averageNumber);
