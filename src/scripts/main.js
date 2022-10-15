'use strict';

const populationData = document.querySelectorAll('.population');
const populations = [...populationData].map(el => (
  +el.innerText.split(',').join('')
));

const total = populations.reduce((prev, curr) => prev + curr, 0);
const totalData = splitWithCommas(total);

const average = total / populations.length;
const averageData = splitWithCommas(average);

document.querySelector('.total-population').innerText = totalData;
document.querySelector('.average-population').innerText = averageData;

function splitWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
