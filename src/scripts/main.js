'use strict';

let elements = [...document.querySelectorAll('.population')];

elements = elements.map((e) => {
  return +e.textContent.split(',').join('');
});

let sum = elements.reduce((totall, element) => element + totall, 0);
let average = Math.ceil(sum / elements.length);

sum = sum.toString();
average = average.toString();

const formator = (string) => {
  let result = '';
  const reversedString = string.split('').reverse();

  for (let i = string.length - 1; i >= 0; i--) {
    if (i % 3 === 2 && i !== reversedString.length - 1) {
      result += ' ' + reversedString[i];
    } else {
      result += reversedString[i];
    }
  }

  return result;
};

const result1 = formator(sum);
const result2 = formator(average);
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

totalPopulationSpan.insertAdjacentText('beforeend', result1);
averagePopulationSpan.insertAdjacentText('beforeend', result2);
