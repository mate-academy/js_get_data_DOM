'use strict';

function addSeparator(number) {
  let numberWithSeparator = '';
  let count = 0;

  for (let i = number.length - 1; i >= 0; i--) {
    numberWithSeparator = number[i] + numberWithSeparator;
    count++;

    if (count >= 3 && i >= 1) {
      numberWithSeparator = ',' + numberWithSeparator;
      count = 0;
    }
  }

  return numberWithSeparator;
}

let total = 0;
// let count = 0;
let average = 0;
// let totalStr = '';
// let averageStr = '';
const listNode = document.querySelectorAll('.population');
const list = [...listNode];

for (const el of list) {
  const number = parseInt(el.textContent.split(',').join(''), 10);

  total = total + number;
}

average = total / list.length;

const averageString = addSeparator('' + average);
const totalString = addSeparator('' + total);

// for (let i = averageString.length - 1; i >= 0; i--) {
//   averageStr = averageString[i] + averageStr;
//   count++;

//   if (count >= 3 && i >= 3) {
//     averageStr = ',' + averageStr;
//     count = 0;
//   }

//   console.log(averageStr);
// }

const totalResult = document.querySelector('.total-population');
const averageResult = document.querySelector('.average-population');

totalResult.textContent = totalString;
averageResult.textContent = averageString;
