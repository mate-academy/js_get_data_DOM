'use strict';

const population = document.getElementsByClassName('population');
const arr = [...population].map(item => +item.innerText.split(',').join(''));

const sum = (prev, current) => {
  return prev + current;
};
const total = arr.reduce(sum, 0);
const avg = Math.round(total / arr.length);

function convert(number) {
  return Intl.NumberFormat('en-US').format(number);
}

const sumSpan = document.querySelector('.total-population');

sumSpan.textContent = convert(total);

const avgSpan = document.querySelector('.average-population');

avgSpan.textContent = `${convert(avg)}`;
