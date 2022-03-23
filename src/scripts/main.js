'use strict';

const population = document.querySelectorAll('.population');
let sum = 0;

for (const element of population) {
  const parsedNum = +element.innerText.replace(/,/g, '');

  if (Number.isSafeInteger(parsedNum)) {
    sum += parsedNum;
  }
}

document.querySelector('.total-population').innerText = sum.toLocaleString();

document.querySelector('.average-population').innerText
  = (sum / population.length).toLocaleString();
