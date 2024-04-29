'use strict';

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const data = [...document.querySelectorAll('.population')].map(
  (element) => +element.innerText.replace(/,/g, ''),
);
const total = data.reduce((acc, curr) => acc + curr, 0);
const average = total / [...document.querySelectorAll('.population')].length;

totalElement.innerText = total.toLocaleString('en-US');
averageElement.innerText = average.toLocaleString('en-US');
