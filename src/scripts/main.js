'use strict';

// write your code here
const spanPopulation = [...document.querySelectorAll('.population')];
const arrPopulations = spanPopulation.map(span =>
  span.textContent.replaceAll(',', ''));
const totalPopulation = arrPopulations.reduce((prev, el) =>
  prev + Number(el), 0);
const averagePopulation = totalPopulation / arrPopulations.length;
const spanAveragePopulation = document.querySelector('.average-population');
const spanTotalPopulation = document.querySelector('.total-population');

function format(num) {
  let n = num;
  const arr = [];
  let str = '';

  while (n !== 0) {
    arr.unshift(n % 1000);
    n = Math.floor(n / 1000);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    str += arr[i] + ',';
  }

  str += arr[arr.length - 1];

  return str;
}

spanAveragePopulation.textContent = format(averagePopulation);
spanTotalPopulation.textContent = format(totalPopulation);
