'use strict';

function doNumericStyle(num) {
  const numStr = num.toString();
  const arr = [];

  for (let i = numStr.length; i > 0; i -= 3) {
    arr.push(numStr.slice(Math.max(0, i - 3), i));
  }

  return arr.reverse().join(',');
}

const populationSpan = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populations = Array.from(populationSpan).map((span) => {
  return +span.textContent.replaceAll(',', '');
});

let sum = populations.reduce((total, population) => total + population);
let average = Math.round(sum / populations.length);

sum = doNumericStyle(sum);
average = doNumericStyle(average);

totalPopulation.innerHTML = `${sum}`;
averagePopulation.innerHTML = `${average}`;
