'use strict';

const population = document.querySelectorAll('.population');

let total = 0;
let average = 0;

population.forEach((element) => {
  const number = element.textContent.replaceAll(',', '');

  total += +number;
});

average = total / population.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
