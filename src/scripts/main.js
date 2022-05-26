'use strict';

const threeDigitSeparator = (number) => {
  const stringNumber = number.toString().split('').reverse();
  const result = [];

  for (let i = 0; i < stringNumber.length; i++) {
    if (i % 3 === 0) {
      result.push(',');
    }
    result.push(stringNumber[i]);
  }

  return result.reverse().slice(0, -1).join('');
};

const populations = [
  ...document.querySelectorAll('.population'),
].map(country => +country.textContent.replace(/,/g, ''));

const totalPopulation = populations.reduce((total, current) => (
  total + current
),
0);

const averagePopulation = totalPopulation / populations.length;

const totalHtml = document.querySelector('.total-population');
const averageHtml = document.querySelector('.average-population');

totalHtml.textContent = threeDigitSeparator(totalPopulation);
averageHtml.textContent = threeDigitSeparator(averagePopulation);
