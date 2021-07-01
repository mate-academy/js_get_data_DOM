'use strict';

function thousandsSeparator(num) {
  const copy = `${num}`.split('');

  for (let i = copy.length - 3; i >= 0; i -= 3) {
    if (i !== 0) {
      copy.splice(i, 0, ',');
    }
  }

  return copy.join('');
}

let populationArr = document.querySelectorAll('.population');
const total = document.querySelector('.total');
const average = document.querySelector('.average');

populationArr = [...populationArr]
  .map(num => Number(num.textContent.replace(/,/g, '')));

const totalAge = populationArr.reduce((a, b) => a + b);
const averageAge = Math.ceil(totalAge / populationArr.length);

total.textContent = total.textContent
  .replace('Calculate it!', thousandsSeparator(totalAge));

average.textContent = average.textContent
  .replace('Calculate it!', thousandsSeparator(averageAge));
