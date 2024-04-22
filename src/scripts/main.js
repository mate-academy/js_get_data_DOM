'use strict';

const population = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationValues = population.map((el) =>
  // eslint-disable-next-line prettier/prettier
  parseFloat(el.textContent.split(',').join('')));

const sum = populationValues.reduce((acc, value) => acc + value);
const avarageValues = sum / populationValues.length;

function formatted(number = 0) {
  const numberString = number.toString();
  let result = '';

  for (let i = 0; i < numberString.length; i++) {
    if (i > 0 && (numberString.length - i) % 3 === 0) {
      result += ',';
    }

    result += numberString.charAt(i);
  }

  return result;
}

total.textContent = formatted(sum);
average.textContent = formatted(avarageValues);
