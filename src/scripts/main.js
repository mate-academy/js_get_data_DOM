'use strict';

const items = document.querySelectorAll('.population');

const total = [...items].map(item =>
  +(item.innerText).split(',').join('')).reduce((sum, el) => sum + el);

const average = [...items].map(item =>
  +(item.innerText).split(',').join('')).reduce((sum, el) =>
  (sum + el)) / items.length;

const totalValue = document.querySelector('.total-population');
const averageValue = document.querySelector('.average-population');

totalValue.innerHTML = `${total.toLocaleString('en-US')}`;
averageValue.innerHTML = `${average.toLocaleString('en-US')}`;
