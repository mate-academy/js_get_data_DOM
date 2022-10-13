'use strict';

const populationData = document.querySelectorAll('.population');
const populations = [...populationData].map(el => (
  +el.innerText.split(',').join('')
));

const total = populations.reduce((prev, curr) => prev + curr, 0);
const totalData = splitWithCommas(total);

const everage = total / populations.length;
const everageData = splitWithCommas(everage);

document.querySelector('.total-population').innerText = totalData;
document.querySelector('.average-population').innerText = everageData;

function splitWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
