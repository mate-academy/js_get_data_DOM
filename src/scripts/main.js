'use strict';

let populations = document.querySelectorAll('.population');

populations = [...populations];

populations = populations.map(item => {
  return Number(item.textContent.split(',').join(''));
});

const total = String(populations.reduce((accum, item) => accum + item));
const averege = String(total / populations.length);

function addSeparator(str) {
  const text = str.split('').reverse();
  let result = '';

  for (let i = 0; i < text.length; i++) {
    result = text[i] + result;

    if ((i + 1) % 3 === 0 && i !== text.length - 1) {
      result = ',' + result;
    }
  }

  return result;
}

const averegeElem = document.querySelector('.average-population');
const totalElem = document.querySelector('.total-population');

averegeElem.textContent = addSeparator(averege);
totalElem.textContent = addSeparator(total);
