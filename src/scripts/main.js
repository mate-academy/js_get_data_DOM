'use strict';

const popArr = document.querySelectorAll('.population');
const totalInfo = document.querySelector('.total-population');
const averageInfo = document.querySelector('.average-population');

const total = [...popArr].reduce((prev, curr) => {
  return prev + +curr.textContent.split(',').join('');
}, 0);

const average = total / popArr.length;

totalInfo.textContent = total.toLocaleString('en-us');
averageInfo.textContent = average.toLocaleString('en-us');
