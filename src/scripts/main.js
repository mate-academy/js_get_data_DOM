'use strict';

const arr = [];
const getData = document.querySelectorAll('.population');
const texts = [...getData].map(item => item.innerText);

for (let i = 0; i < texts.length; i++) {
  const toNumber = texts[i].split(',').join('');

  arr.push(Number(toNumber));
}

const calculateTotal = arr.reduce((x, y) => x + y);

const calculateAverage = calculateTotal / arr.length;
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = new Intl.NumberFormat('en-EN').format(calculateTotal);
average.innerHTML = new Intl.NumberFormat('en-EN').format(calculateAverage);
