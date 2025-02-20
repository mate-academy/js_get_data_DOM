'use strict';

const population = [...document.querySelectorAll('.population')].map(
  (element) => Number(element.textContent.replaceAll(',', '')),
);
const total = population.reduce((acc, current) => acc + current, 0);
const average = Math.round(total / population.length);

document.querySelector('.total-population').textContent = formatNum(total);
document.querySelector('.average-population').textContent = formatNum(average);

function formatNum(num) {
  const strNum = '' + num;
  let counter = 0;
  const formattedNum = [];

  for (let i = strNum.length - 1; i >= 0; i--) {
    if (counter === 3) {
      formattedNum.unshift(',');
      counter = 0;
    }
    formattedNum.unshift(strNum[i]);
    counter++;
  }

  return formattedNum.join('');
}
