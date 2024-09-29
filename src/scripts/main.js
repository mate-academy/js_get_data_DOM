'use strict';

// write your code here

const elements = [...document.querySelectorAll('.population')].map(
  (el) => el.textContent,
);

/* const population1 = elements.map((el) => el.replaceAll(',', ''));
const population2 = population1.map((el) => Number(el));
const population3 = population2.reduce((el, sum) => el + sum, 0);
population=population3.map(el =>el.toSring())
document.querySelector('average-population').textContent = "population"; */
const all = elements
  .map((el) => Number(el.replaceAll(/,/g, '')))
  .reduce((sum, x) => sum + x, 0);

document.querySelector('.total-population').textContent =
  all.toLocaleString('en-US');

document.querySelector('.average-population').textContent = (
  all / elements.length
).toLocaleString('en-US');
