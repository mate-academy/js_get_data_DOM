'use strict';

const populations = Array.from(
  document.getElementsByClassName('population'),
).map((x) => +x.textContent.replaceAll(',', ''));
const summ = populations.reduce((acc, curr) => acc + curr);

document.getElementsByClassName('total-population')[0].textContent =
  summ.toLocaleString('en-US');

document.getElementsByClassName('average-population')[0].textContent =
  Math.round(summ / populations.length).toLocaleString('en-US');
