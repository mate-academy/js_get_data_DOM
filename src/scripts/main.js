'use strict';

// write your code here
const populations = document.querySelectorAll('.population');

const values = Array.from(populations).map((el) => el.textContent);

let sum = 0;

for (const value of values) {
  sum += +value.split(',').join('');
}

const averageValue = Math.floor(sum / values.length);

const totalPopulation = document.querySelector('.total-population');
const averPopulation = document.querySelector('.average-population');

// const totalResult = '';
// const averResult = '';

function getPopulation(val) {
  const value = val.toString();
  const result = [];
  let pie = '';

  for (let i = value.length - 1; i >= 0; i--) {
    pie += value[i];

    if (i === 0 && pie.length < 3) {
      result.push(pie);
    } else if (pie.length === 3) {
      result.push(pie);
      pie = '';
    }
  }
  // console.log(result);

  return result.join(',').split('').reverse().join('');
}

// console.log(sum);
// console.log(averageValue);

totalPopulation.textContent = getPopulation(sum);
averPopulation.textContent = getPopulation(averageValue);
