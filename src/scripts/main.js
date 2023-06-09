'use strict';

const spa = document.querySelectorAll('span.population');
const strings = [...spa].map(one => one.textContent);
const populations = strings.map(el => {
  Number(el.split(',').join(''));
}
);

const resultTotal = populations.reduce((a, b) => a + b);
const resultAverage = resultTotal / strings.length;

const total = document.querySelector('.total-population');

total.innerHTML = resultTotal.toLocaleString('en-US');

const average = document.querySelector('.average-population');

average.innerHTML = Math.floor(resultAverage).toLocaleString('en-US');
