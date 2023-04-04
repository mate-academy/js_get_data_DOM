'use strict';

const spans = document.querySelectorAll('.population');
const populations = [...spans].map(span =>
  +span.innerText.replace(/[^\d]/g, ''));
const spanTotal = document.querySelector('.total-population');
const spanAverage = document.querySelector('.average-population');
const total = populations.reduce((sum, population) => sum + population);

spanTotal.innerText = addComa(total);
spanAverage.innerText = addComa(total / populations.length);

function addComa(num) {
  const x = num.toString().split('').reduce((sum, n, index) =>
    (num.toString().length - index) % 3 === 0 ? sum + ',' + n : sum + n);

  return x;
}
