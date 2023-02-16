'use strict';

const population = document.querySelectorAll('.population');
const totalPeople = document.querySelector('.total-population');
const averagePeople = document.querySelector('.average-population');

const { total, acount } = [...population].reduce((acc, elem) => {
  const populationContry = +elem.innerText.replaceAll(',', '');

  acc.acount++;
  acc.total += populationContry;

  return acc;
}, {
  total: 0, acount: 0,
});

totalPeople.innerText = getNumber(total);
averagePeople.innerText = getNumber(total / acount);

function getNumber(num) {
  const arr = num.toString().split('');
  const arrNum = [];

  for (let i = arr.length - 1, a = 0; i >= 0; i--) {
    if (a < 3) {
      arrNum.unshift(arr[i]);
      a++;
      continue;
    }

    arrNum.unshift(',');
    arrNum.unshift(arr[i]);
    a = 1;
  }

  return arrNum.join('');
}
