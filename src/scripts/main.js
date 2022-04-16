'use strict';

function adderThousandsSeparator(number) {
  const res = [];
  const strNum = `${number}`;
  let count = 0;

  for (let i = strNum.length - 1; i >= 0; i--) {
    count++;
    res.push(strNum[i]);

    if (count % 3 === 0 && count !== strNum.length) {
      res.push(',');
    }
  }

  return res.reverse().join('');
}

const values = document.querySelectorAll('.population');
const numbers = [...values].map(value => +value.innerText.split(',').join(''));

const totalValue = numbers.reduce((prev, next) => prev + next, 0);
const averageValue = totalValue / numbers.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = adderThousandsSeparator(totalValue);
average.textContent = adderThousandsSeparator(averageValue);
