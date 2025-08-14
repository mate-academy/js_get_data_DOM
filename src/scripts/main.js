'use strict';

// write your code here
const populations = document.querySelectorAll('.population');

const values = Array.from(populations).map((el) => el.textContent);

let sum = 0;

for (const value of values) {
  const num = +value.split(',').join('');

  if (!isNaN(+num)) {
    sum += num;
  }
}

let count = 0;
let validCount = 0;

values.forEach((val) => {
  const num = parseInt(val.replace(/,/g, ''), 10);

  if (!isNaN(num)) {
    count += num;
    validCount++;
  }
});

const average = validCount > 0 ? Math.floor(count / validCount) : 0;

const totalPopulation = document.querySelector('.total-population');
const averPopulation = document.querySelector('.average-population');

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

  return result.join(',').split('').reverse().join('');
}

totalPopulation.textContent = getPopulation(sum);
averPopulation.textContent = getPopulation(average);
