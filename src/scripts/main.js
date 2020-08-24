'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let totalNum = 0;
let averageNum = 0;

for (const num of population) {
  totalNum += +num.innerText.split(',').join('');
}

averageNum = totalNum / population.length;

total.replaceWith(totalNum.toLocaleString('en-US'));
average.replaceWith(averageNum.toLocaleString('en-US'));
