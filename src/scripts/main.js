'use strict';

function countPopulation() {
  const items = document.querySelectorAll('.population');

  const nums = [...items].map(item =>
    Number(item.innerText.split(',').join('')));
  const totalPopulation = nums.reduce((a, b) => a + b, 0);
  const averagePopulation = totalPopulation / nums.length;

  document.querySelector('.total-population').innerText
  = totalPopulation.toLocaleString('en-US');

  document.querySelector('.average-population').innerText
  = averagePopulation.toLocaleString('en-US');
}

countPopulation();
