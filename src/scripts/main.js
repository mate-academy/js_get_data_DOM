'use strict';

const population = document.querySelectorAll('.population');

const numbersString = [...population].map(item => item.innerHTML);

const numbersArray = numbersString
  .map(str => parseInt(str.replace(/,/g, ''), 10));

const total = numbersArray.reduce((a, b) => a + b);

const totalOutput = total.toLocaleString('en-US');

const totalItem = document.querySelector('.total-population');

totalItem.replaceWith(totalOutput);

const average = total / numbersArray.length;

const averageOutput = average.toLocaleString('en-US');

const averageItem = document.querySelector('.average-population');

averageItem.replaceWith(averageOutput);
