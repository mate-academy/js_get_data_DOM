'use strict';

const populations = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const summary = [...populations]
  .map(item => +item.innerText.split(',').join(''))
  .reduce((acc, el) => acc + el);

total.innerHTML = summary.toLocaleString('en-US');
average.innerHTML = (summary / populations.length).toLocaleString('en-US');
