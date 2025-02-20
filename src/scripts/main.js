'use strict';

const spanElements = document.getElementsByClassName('population');
let sum = 0;

for (const element of spanElements) {
  sum += Number(element.textContent.replace(/,/g, ''));
}
const average = sum / spanElements.length;

document.getElementsByClassName('total-population')[0].innerHTML =
  sum.toLocaleString('en-US');

document.getElementsByClassName('average-population')[0].innerHTML =
  average.toLocaleString('en-US');
