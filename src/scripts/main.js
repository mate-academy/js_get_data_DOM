'use strict';

const numbers = document.querySelectorAll('.population');
const text = [...numbers].map(item => {
  const num = item.innerHTML;
  const newNum = num.split(',').join('');

  return Number(newNum);
})


const sum = text.reduce((pre, cur) => pre + cur, 0);
const numberFormatter = Intl.NumberFormat('en-US');
const formattedSum = numberFormatter.format(sum);
const average = sum / text.length;
const formattedAver = numberFormatter.format(average);

document.querySelector('.total-population').innerHTML = formattedSum;
document.querySelector('.average-population').innerHTML = formattedAver;
