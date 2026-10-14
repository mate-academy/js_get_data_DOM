'use strict';

const populations = document.querySelectorAll('.population');
const totalBox = [];
let average = 0;

for (const element of populations) {
  const populationNumber = element.textContent;

  const formattedNumber = Number(populationNumber.replace(/,/g, ''));

  totalBox.push(formattedNumber);
}

const total = totalBox.reduce((acc, curr) => acc + curr, 0);

average = total / totalBox.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
