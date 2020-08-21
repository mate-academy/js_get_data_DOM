'use strict';

const span = document.querySelectorAll('.population');

const arr = [...span]
  .map(text => text.innerText)
  .map(elem => elem.split(',').join(''));

const totalValue = arr.reduce((accum, elem) => accum + +elem, 0);

document
  .getElementsByClassName('total-population')[0]
  .innerText = totalValue;

document
  .getElementsByClassName('average-population')[0]
  .innerText = totalValue / arr.length;
