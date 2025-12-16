'use strict';

const population = document.querySelectorAll('.population');
const popArr = [...population];

const total = popArr.reduce((acc, item) => {
  const num = +item.textContent.replace(/,/g, '');

  if (isNaN(num)) {
    return acc;
  }

  return acc + num;
}, 0);
const average = Math.round(total / 9);

const resultTotal = document.querySelector('.total-population');

resultTotal.textContent = addCom(total);

const resultAverage = document.querySelector('.average-population');

resultAverage.textContent = addCom(average);

function addCom(num) {
  return num.toLocaleString('en-US');
}
