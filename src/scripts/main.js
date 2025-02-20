'use strict';

const list = document.querySelectorAll('.population');
const totalList = document.querySelector('.total-population');
const averageList = document.querySelector('.average-population');

const sum = [...list]
  .map(number => number.textContent)
  .reduce((tot, a) => tot + (+a.split(',').join('')), 0);

totalList.textContent = `${sum.toLocaleString('en-US')}`;
averageList.textContent = `${(sum / [...list].length).toLocaleString('en-US')}`;
