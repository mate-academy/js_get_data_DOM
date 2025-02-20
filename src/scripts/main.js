'use strict';

const people = document.querySelectorAll('.population');
const info = document.querySelector('.total-population');
const averageInfo = document.querySelector('.average-population');

const total = [...people].reduce((prev, curr) => {
  return prev + +curr.textContent.split(',').join('');
}, 0);

const average = total / people.length;

info.textContent = total.toLocaleString('en-us');
averageInfo.textContent = average.toLocaleString('en-us');
