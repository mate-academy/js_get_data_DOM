'use strict';

const textData = [...document.querySelectorAll('span.population')];

const numbers = textData.map((num) => {
  if (typeof +num.innerText === 'number') {
    return +num.innerText.replaceAll(',', '');
  }
});

const total = numbers.reduce((prev, num) => prev + num, 0);
const totalR = addComa(total);

const average = Math.round(total / numbers.length);
const averageR = addComa(average);

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = totalR;
averageSpan.textContent = averageR;

function addComa(number) {
  const arr = number.toString().split('');

  for (let i = arr.length - 4; i >= 0; i -= 3) {
    arr[i] = arr[i] + ',';
  }

  return arr.join('');
}
