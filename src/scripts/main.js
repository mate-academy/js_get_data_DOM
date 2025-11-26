'use strict';

const population = [...document.querySelectorAll('.population')];

let total = 0;
let average = 0;

population.forEach((el) => {
  const validNumber = +el.textContent.replaceAll(',', '');

  if (!isNaN(validNumber)) {
    total += validNumber;
  }
});

average = +(total / population.length).toFixed(0);

document.querySelector('.total-population').textContent =
  `${total.toLocaleString('en-US')}`;

document.querySelector('.average-population').textContent =
  `${average.toLocaleString('en-US')}`;
