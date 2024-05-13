'use strict';

const spanPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

const data = [];

spanPopulation.forEach((item) => {
  const number = +item.textContent.replace(/,/g, '');

  data.push(number);
});

const totalInner = data.reduce((a, b) => a + b, 0);

totalPopulation.textContent = totalInner.toLocaleString('en-US');

avaragePopulation.textContent = (
  totalInner / spanPopulation.length
).toLocaleString();
