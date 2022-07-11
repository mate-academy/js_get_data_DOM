'use strict';

// write your code here
const countries = document.querySelectorAll('.population');
const result = [...countries].map((country) =>
  +country.textContent.split(',').join(''));
const totalScore = result.reduce((prev, score) => prev + score, 0);
const averageScore = totalScore / result.length;

result.score = function(element) {
  const allString = `${element}`.split('');
  let total = '';
  let count = 0;

  for (let i = allString.length - 1; i >= 0; i--) {
    if (count === 3) {
      total = allString[i] + ',' + total;
      count = 1;
    } else if (count < 3) {
      total = allString[i] + total;
      count++;
    }
  }

  return total;
};

const firstElement = document.querySelector('.total-population');
const secondElement = document.querySelector('.average-population');

firstElement.innerHTML = `
${result.score(totalScore)}
`;

secondElement.innerHTML = `
${result.score(averageScore)}
`;
