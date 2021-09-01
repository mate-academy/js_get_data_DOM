'use strict';

const items = document.querySelectorAll('.population');

const population = [...items].map((item) => parseInt(item.textContent.replace(/,/g, '')));
const totalValue = population.reduce((prev, curr) => prev + curr);
const averageValue = totalValue/ population.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = value(totalValue);
average.textContent = value(averageValue);

function value(number) {
  let result = number.toString();
  result = Array.from(result).reverse();
  for (let i = 3; i < result.length; i++) {
    if (i % 3 === 0) {
      result[i] = `${result[i]},`;
    }
  }
  result = result.reverse().join('');

  return result;
}