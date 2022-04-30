'use strict';

let result = 0;
let amount = 0;
let resultTotal = '';
let resultAverage = '';
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const allParams = document.querySelectorAll('.population');

for (let i = 0; i < [...allParams].length; i++) {
  result += +[...allParams][i].textContent.split(',').join('');
  amount++;
}

resultTotal = result.toLocaleString('en-US');
resultAverage = (result / amount).toLocaleString('en-US');

total.textContent = resultTotal;
average.textContent = resultAverage;
