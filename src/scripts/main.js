'use strict';

// write your code here
const populationSpans = document.querySelectorAll('.population');

let totalNum = 0;

for (const num of populationSpans) {
  totalNum += +num.innerText.split(',').join('');
}

const averageNum = totalNum / populationSpans.length;

const average = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

average.replaceWith(averageNum.toLocaleString().replace(/\s/g, ','));
total.replaceWith(totalNum.toLocaleString().replace(/\s/g, ','));
