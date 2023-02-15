'use strict';

const population = document.getElementsByClassName('population');
const arr = [];
const texts = [...population].map(item => item.innerText);

for (let i = 0; i < texts.length; i++) {
  arr.push(+texts[i].split(',').join(''));
}

const sum = (prev, current) => {
  return prev + current;
};
const total = arr.reduce(sum);
const avg = Math.round(arr.reduce(sum) / arr.length);

function convert(number) {
  return Intl.NumberFormat('en-US').format(number);
}

const sumSpan = document.querySelector('.total-population');

sumSpan.textContent = `${convert(total)}`;

const avgSpan = document.querySelector('.average-population');

avgSpan.textContent = `${convert(avg)}`;
