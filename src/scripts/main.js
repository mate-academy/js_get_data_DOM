'use strict';

const contry = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const transformToNum = [...contry]
  .map(item => +item.innerText.split(',').join(''));

const sumCount = transformToNum
  .reduce((acc, num) => acc + num, 0);

const averageCount = sumCount / transformToNum.length;

total.innerText = sumCount;
average.innerText = averageCount;
