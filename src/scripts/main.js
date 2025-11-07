'use strict';

// write your code here

// const convertation = () => {
//   const elements = [...document.querySelectorAll(`span.population`)];

//   return elements.map((span) => Number(span.textContent.replace(/,/g, '')));
// };

const elements = [...document.querySelectorAll(`span.population`)];
const convertation = elements.map((x) => {
  // if (!isNaN(x.textContent.replace(/,/g, ''))) {
  //   return +x.textContent.replace(/,/g, '');
  // }
  return !isNaN(x.textContent.replace(/,/g, ''))
    ? +x.textContent.replace(/,/g, '')
    : 0;
});

const total = convertation.reduce((a, b) => a + b);
const average = convertation.reduce((a, b) => a + b) / convertation.length;

document.querySelector(`span.average-population`).textContent =
  Math.floor(average).toLocaleString('en-US');

document.querySelector(`span.total-population`).textContent =
  total.toLocaleString('en-US');
