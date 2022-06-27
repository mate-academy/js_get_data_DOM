'use strict';

// write your code here

const population = document.querySelectorAll(`.population`);
const totalPop = document.querySelector(`.total-population`);
const avaragePop = document.querySelector(`.average-population`);
const array = [];

function separetor(number) {
  const string = `${number}`;
  const newString = [];

  for (let i = 1; i <= string.length; i++) {
    newString.unshift(string[string.length - i]);

    if (i % 3 === 0 && i !== 0 && i !== string.length) {
      newString.unshift(',');
    }
  }

  return newString.join('');
}

population.forEach(number => {
  const str = number.innerHTML.replaceAll(',', '');

  if (!isNaN(Number(str))) {
    array.push(Number(str));
  }
});

const total = array.reduce((prev, curr) => prev + curr);
const avarage = total / array.length;

totalPop.innerHTML = separetor(total);
avaragePop.innerHTML = separetor(avarage);
