'use strict';

const populations = document.querySelectorAll('.population');

const texts = [...populations].map(item => +item.innerText.split(',').join(''));

const totalArr = String(texts.reduce((sum, num) =>
  sum + num, 0)).split('').reverse();

const averageArr = String(Math.round(texts.reduce((sum, num) =>
  (sum + num), 0) / texts.length)).split('').reverse();

for (let i = 0; i < totalArr.length; i++) {
  if (((i + 1) % 3) === 0 && i > 0) {
    totalArr[i + 1] = `${totalArr[i + 1]},`;
  }
}

for (let i = 1; i <= averageArr.length; i++) {
  if (i % 3 === 0 && i > 0 && i + 1 <= averageArr.length) {
    averageArr[i] = `${averageArr[i]},`;
  }
}

const spanTotal = document.querySelector('.total-population');
const spanAverage = document.querySelector('.average-population');

spanTotal.innerText = totalArr.reverse().join('');
spanAverage.innerText = averageArr.reverse().join('');
