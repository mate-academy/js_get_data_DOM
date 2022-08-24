'use strict';

// write your code here

let populations = document.querySelectorAll('span.population');

populations
  = [...populations].map(
    population => +population.innerText.split(',')
      .join(''));

const total = populations.reduce((sum, n) => sum + n, 0);

const average = total / populations.length;

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

function decimalFormat(number) {
  let n = number;
  const result = [];

  do {
    const part = Math.trunc(n / 1000);

    result.push(n - part * 1000);
    n = part;
  } while (n > 1000);

  result.push(n);

  return result.reverse().join(',');
}

totalPopulation.innerHTML = decimalFormat(total);
averagePopulation.innerHTML = decimalFormat(average);
