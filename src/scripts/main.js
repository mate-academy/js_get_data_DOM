'use strict';

const arr = [];
const populations = document.querySelectorAll('.population');
const texts = [...populations].map(item => item.innerText);

for (let i = 0; i < texts.length; i++) {
  const number = +texts[i].replace(',', '');

  arr.push(Number(number));
}

const calculateTotal = arr.reduce((x, y) => x + y);

const calculateAverage = calculateTotal / arr.length;
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = calculateTotal.toLocaleString('en');
average.innerHTML = new Intl.NumberFormat('en-EN').format(calculateAverage);
