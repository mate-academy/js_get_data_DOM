'use strict';

const elements = document.querySelectorAll('.population');

const allPopulationsNum = [...elements].map(el =>
  +(el.innerText).split(',').join(''));

const total = allPopulationsNum.reduce((x, y) => x + y, 0);
const average = total / allPopulationsNum.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.innerText = total.toLocaleString();
averageElement.innerText = average.toLocaleString();
