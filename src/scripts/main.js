'use strict';

const colect = document.querySelectorAll('.population');
const totalPage = document.querySelector('.total-population');
const averagePage = document.querySelector('.average-population');

const arrayPopulation = [...colect].map(item =>
  +(item.innerText.split(',').join('')));
const total = arrayPopulation.reduce((a, b) => (a + b));
const average = total / colect.length;

const comma = (str) => {
  const result = [];
  const arr = `${str}`.split('');

  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0 && i > 0) {
      result.unshift(',');
    }

    result.unshift(arr[arr.length - 1 - i]);
  }

  return result.join('');
};

totalPage.innerText = comma(total);
averagePage.innerText = comma(average);
