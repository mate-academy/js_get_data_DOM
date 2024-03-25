'use strict';

// write your code here
const data = document.querySelectorAll('.population');
let sum = 0;
const count = data.length;

data.forEach(function (el) {
  const population = parseInt(el.textContent.replaceAll(',', ''));

  sum += population;
});

const avg = sum / count;

const formatter = new Intl.NumberFormat('en-US');

const formattedSum = formatter.format(sum);
const formattedAvg = formatter.format(avg);

document.querySelector('.total-population').textContent = formattedSum;
document.querySelector('.average-population').textContent = formattedAvg;
