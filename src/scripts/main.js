'use strict';

let summa = 0;

const result = document.querySelectorAll('li');

for (const key of result) {
  const sum = key.querySelector('.population');

  const number = +sum.innerText.split(',').join('');

  summa += number;
}

const total = document.querySelector('.total-population');

total.innerText = new Intl.NumberFormat('en-us').format(summa);

const average = document.querySelector('.average-population ');

average.innerText = new Intl.NumberFormat('en-us')
  .format(summa / result.length);
