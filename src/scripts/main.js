'use strict';

function makeString(number) {
  const numbers = String(number).split('');

  for (let i = numbers.length - 1, j = 1; i >= 0; i--, j++) {
    if (j % 3 === 0 && i !== 0) {
      numbers[i] = ',' + numbers[i];
    }
  }

  return numbers.join('');
}

const population = document.querySelectorAll('.population');
const total = [...population].map(item => {
  return Number(item.innerHTML.split(',').join(''));
}).reduce((prev, item) => prev + item, 0);

const average = total / [...population].length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.innerHTML = makeString(total);
averageSpan.innerHTML = makeString(average);
