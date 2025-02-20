'use strict';

const textFromSpan = document.querySelectorAll('.population');
const arrFromText = [...textFromSpan].map(
  item => +item.innerText.replace(/,/g, '')
);

const totalQuantity = arrFromText.reduce((a, b) => a + b, 0);
const averageQuantity = totalQuantity / arrFromText.length;

const average = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

total.innerText = totalQuantity.toLocaleString('en-US');
average.innerText = averageQuantity.toLocaleString('en-US');
