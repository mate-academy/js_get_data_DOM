'use strict';

const elements = document.querySelectorAll('.population');
const totalResult = document.querySelector('.total-population');
const averageResult = document.querySelector('.average-population');

const stringsArr = [...elements].map(el => el.textContent);
const numArr = stringsArr.map(el => +el.split(',').join(''));

const total = numArr.reduce(
  (accumulator, current) => accumulator + current, 0,
);
const average = (total / numArr.length);

totalResult.replaceWith(total.toLocaleString());
averageResult.replaceWith(average.toLocaleString());
