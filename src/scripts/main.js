'use strict';

const content = document.querySelectorAll('.population');
let total = 0;
let avarage = 0;
const populationArray = [];

for (const child of content) {
  const re = /,/gi;

  populationArray.push(+child.textContent.replace(re, ''));
};

total = populationArray.reduce((a, b) => {
  return a + b;
});

avarage = total / content.length;

const numberFormat = Intl.NumberFormat('en-US');
const formattedTotal = numberFormat.format(total);
const formattedAvarage = numberFormat.format(avarage);

const totalFinal = document.querySelector('.total');
const averageFinal = document.querySelector('.average');

document.querySelector('.total-population').remove();

totalFinal.insertAdjacentHTML('beforeend', `
  <span class="total-population">
    ${formattedTotal}
  </span>
`);

document.querySelector('.average-population').remove();

averageFinal.insertAdjacentHTML('beforeend', `
  <span class="average-population">
    ${formattedAvarage}
  </span>
`);
