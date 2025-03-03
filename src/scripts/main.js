'use strict';

// write your code here
const allSpan = document.querySelectorAll('span');
const population = [...allSpan].filter(
  (span) => span.className === 'population',
);

const total = population.reduce(
  (acc, el) => acc + Number(el.innerText.replace(/,/g, '')),
  0,
);
const avarage =
  population.reduce(
    (acc, el) => acc + Number(el.innerText.replace(/,/g, '')),
    0,
  ) / population.length;

const totalNumber = [...allSpan].find(
  (span) => span.className === 'total-population',
);

totalNumber.innerHTML = total.toLocaleString('en-US');

const avarageNumber = [...allSpan].find(
  (span) => span.className === 'average-population',
);

avarageNumber.innerHTML = avarage.toLocaleString('en-US');
