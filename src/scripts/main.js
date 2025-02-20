'use strict';

const populationList = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

let totalLength = 0;
let total = 0;
let average = 0;

populationList.forEach((value) => {
  const parsedValue = value.innerText.replace(/[^0-9.]/g, '');
  const number = Number(parsedValue);

  if (!isNaN(number)) {
    totalLength++;
    total += number;
  }
});

average = total / totalLength;

totalElement.innerText = total.toLocaleString('en-US');
averageElement.innerText = average.toLocaleString('en-US');
