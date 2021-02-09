'use strict';

// write your code here
const collection = document.querySelectorAll('.population');
let populations = [];

[...collection].forEach(item => populations.push(item.innerText));

populations = populations.map(item => {
  return +item.split(',').join('');
});

const total = populations.reduce((a, b) => a + b);
const average = total / collection.length;

const totalElem = document.querySelector('.total-population');
const averageElem = document.querySelector('.average-population');

totalElem.innerText = formatNumber(total);
averageElem.innerText = formatNumber(average);

function formatNumber(num) {
  const output = [];
  const useNum = num.toString();

  useNum.split('').reverse('').map((symbol, i) => {
    if (i % 3 === 0 && i !== 0) {
      output.push(',');
    }
    output.push(symbol);
  });

  output.reverse();

  return output.join('');
}
