'use strict';

const contry = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const transformToNum = [...contry]
  .map(item => +item.innerText.split(',').join(''));

const sumCount = transformToNum
  .reduce((acc, num) => acc + num, 0);
const averageCount = (sumCount / transformToNum.length).toString();
const result = sumCount.toString();

function addCommas(str) {
  const res = str.split('');

  for (let i = 0; i <= res.length; i += 3) {
    if (res[i] <= res.length) {
      res[i] += ',';
    }
  }

  return res.join('');
}

total.innerText = addCommas(result).slice(0, -1);
average.innerText = addCommas(averageCount);
