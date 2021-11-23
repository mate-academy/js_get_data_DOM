'use strict';

const populations = [...document.querySelectorAll('.population')];
const total = populations.reduce((sum, item) => {
  const num = +item.textContent.replace(/,/g, '');

  if (isNaN(num)) {
    throw new Error(`'${item.textContent}' is not a number`);
  }

  return sum + num;
}, 0);
const average = Math.round(total / populations.length);

function getFormat(num) {
  const reversedNum = [...`${num}`].reverse();

  for (let i = 3; i < reversedNum.length; i += 3) {
    reversedNum.splice(i, 0, ',');
    i++;
  }

  return reversedNum.reverse().join('');
}

document.querySelector('.total-population').textContent = getFormat(total);
document.querySelector('.average-population').textContent = getFormat(average);
