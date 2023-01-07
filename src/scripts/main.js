'use strict';

const content = document.querySelectorAll('.population');
let total = 0;
let avarage = 0;
const arr = [];

for (const child of content) {
  const re = /,/gi;

  arr.push(+child.textContent.replace(re, ''));

  total = arr.reduce((a, b) => {
    return a + b;
  });
};

avarage = total / content.length;

const numFor = Intl.NumberFormat('en-US');
const newForTotal = numFor.format(total);
const newForAvarage = numFor.format(avarage);

const totalFinal = document.querySelector('.total');
const averageFinal = document.querySelector('.average');

document.querySelector('.total-population').remove();

totalFinal.insertAdjacentHTML('beforeend', `
  <span class="total-population">
    ${newForTotal}
  </span>
`);

document.querySelector('.average-population').remove();

averageFinal.insertAdjacentHTML('beforeend', `
  <span class="average-population">
    ${newForAvarage}
  </span>
`);
