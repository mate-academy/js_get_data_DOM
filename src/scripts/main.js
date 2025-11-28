'use strict';

const elem = [...document.querySelectorAll('span.population')];
const totalElem = document.querySelector('span.total-population');
const averageElem = document.querySelector('span.average-population');
let total = 0;
let average = 0;
let divider = 0;

for (const e of elem) {
  const value = e.innerHTML.replaceAll(',', '');
  const number = Number(value);

  if (!Number.isNaN(number)) {
    total += number;
    divider += 1;
  }
}

average = Math.round(total / Math.max(divider, 1));

totalElem.innerText = total.toLocaleString('en-US');
averageElem.innerText = average.toLocaleString('en-US');
