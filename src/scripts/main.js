'use strict';

const population = document.querySelectorAll('.population');
const popArr = [...population];

const total = popArr.reduce((acc, item) => {
  return acc + +item.textContent.replace(/,/g, '');
}, 0);
const average = Math.round(total / 9);

const resultTotal = document.querySelector('.total-population');

resultTotal.textContent = addCom(total);

const resultAverage = document.querySelector('.average-population');

resultAverage.textContent = addCom(average);

function addCom(num) {
  const str = num + '';
  let count = 2;
  let strBilion = str;

  if (str.length === 10 || str.length === 4 || str.length === 7) {
    count = 0;
    strBilion = str[count] + ',' + str.slice(1 + count);
  }

  if (str.length === 5 || str.length === 8 || str.length === 11) {
    count = -1;
    strBilion = str.slice(0, 1) + str[1] + ',' + str.slice(1 + 1);
  }

  for (let i = 4 - count; i < strBilion.length - 3; i += 4) {
    strBilion =
      strBilion.slice(0, i) + strBilion[i] + ',' + strBilion.slice(i + 1);
  }

  return strBilion;
}
