'use strict';

const items = document.querySelectorAll('.population');
const amount = [...items].map(item => item.innerText);

const total = amount.reduce((acc, item) => acc + +item.split(',').join(''), 0);
const average = total / amount.length;

const totalString = thousandsSeparator(total);
const averageString = thousandsSeparator(average);

document.querySelector('.total-population').innerHTML = totalString;
document.querySelector('.average-population').innerHTML = averageString;

function thousandsSeparator(num) {
  const str = num.toString();
  let innerArr = [];
  const outerArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    innerArr.push(str[i]);

    if (innerArr.length === 3) {
      outerArr.push(innerArr.reverse().join(''));
      innerArr = [];
    }
  }

  if (innerArr.length !== 0) {
    outerArr.push(innerArr.reverse().join(''));
  }

  return outerArr.reverse().join(',');
}
