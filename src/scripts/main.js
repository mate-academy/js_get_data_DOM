'use strict';

const amount = document.querySelectorAll('.population');

const populations = [...amount].map(span =>
  +(span.innerText.split(',').join('')));

const total = populations.reduce((acc, curr) => acc + curr);

const average = total / populations.length;

function addComas(number) {
  const numerals = (number.toString()).split('');

  for (let i = (numerals.length - 3); i > 0; i -= 3) {
    numerals.splice(i, 0, ',');
  }

  return numerals.join('');
}

const totalPopulation = document.querySelector('.total-population');

const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = addComas(total);

averagePopulation.innerText = addComas(average);
