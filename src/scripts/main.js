'use strict';

const spans = document.querySelectorAll('.population');
const dataArr = [...spans].map(span => +span.textContent.split(',').join(''));
const total = dataArr.reduce((sum, item) => sum + item);
const average = total / dataArr.length;

document.querySelector('.total-population')
  .innerText = total.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerText = average.toLocaleString('en-US');
