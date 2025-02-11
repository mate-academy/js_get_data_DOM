'use strict';

// const array = [...document.querySelectorAll('span')];
// const elements = array
//   .filter((ell) => ell.matches('.population'))
//   .map((ell) => Number(ell.textContent));
// const total = elements.reduce((sum, ell) => sum + ell, 0);
// const average = elements.length > 0 ? String(total / elements.length) : '0';

// document.querySelector('.total-population').textContent = `${total}`;
// document.querySelector('.average-population').textContent = `${average}`;

const spans = document.querySelectorAll('span.population');
const populations = [...spans];
let total = 0;

for (const elem of populations) {
  const newElem = +elem.innerHTML.split(',').join('');

  total += newElem;
}

const average = total / populations.length;

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

const totalData = document.querySelector('.total-population');
const averageData = document.querySelector('.average-population');

totalData.innerHTML = formatNumber(total);
averageData.innerHTML = formatNumber(average);
