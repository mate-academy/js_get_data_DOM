'use strict';

const populationArr = [...document.querySelectorAll('.population')];

const total = populationArr.reduce(
  (sum, popul) => sum + parseInt(popul.innerText.split(',').join('')),
  0,
);

const totalBox = document.querySelector('.total-population');

const average = total / 10;

totalBox.replaceWith(total.toLocaleString('en-US'));

document
  .querySelector('.average-population')
  .replaceWith(average.toLocaleString('en-US'));
