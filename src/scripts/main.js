'use strict';

const numbers = Array.from(document.querySelectorAll('.population')).map(item =>
  item.innerHTML.split(',').join('')
);

const total = numbers.reduce((sum, item) => sum + +item, 0);
const average = total / numbers.length;

const totalHtml = document.querySelector('.total-population');
const averageHtml = document.querySelector('.average-population');

totalHtml.innerHTML = total.toLocaleString('en-US');
averageHtml.innerHTML = average.toLocaleString('en-US');
