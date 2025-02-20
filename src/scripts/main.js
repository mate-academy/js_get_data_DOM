'use strict';

const populations = document.getElementsByClassName('population');
const total = document.getElementsByClassName('total-population');
const avg = document.getElementsByClassName('average-population');
let num = 0;

function makeComas(number) {
  const reversedSeparatedNum = number.toString().split('').reverse();
  let separatedNum = '';

  for (let i = 0; i < reversedSeparatedNum.length; i++) {
    if (i > 0 && i % 3 === 0) {
      separatedNum += ',';
    }
    separatedNum += reversedSeparatedNum[i];
  }

  return separatedNum.split('').reverse().join('');
}

for (let i = 0; i < populations.length; i++) {
  num += parseInt(
    populations[i].textContent
      .split(',')
      .reduce((acc, currentValue) => acc + currentValue, ''),
  );
}

total[0].innerHTML = makeComas(num);

avg[0].innerHTML = makeComas(num / populations.length);
