'use strict';

// write your code here
const populationElement = [...document.querySelectorAll('.population')];
const totalElement = document.querySelector('.total-population');
const avarageElement = document.querySelector('.average-population');

const populations = populationElement.map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const total = populations.reduce((acc, value) => acc + value, 0);

totalElement.textContent = `${total.toLocaleString('en-US')}`;

const avarage = Math.floor(total / populationElement.length);

avarageElement.textContent = `${avarage.toLocaleString('en-US')}`;
