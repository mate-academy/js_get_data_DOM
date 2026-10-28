'use strict';

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');

const populations = document.querySelectorAll('.population');

let sum = 0;

populations.forEach((element) => {
  const text = element.textContent.replace(/,/g, '');

  const number = parseFloat(text);

  if (!isNaN(number)) {
    sum += number;
  } else {
    throw new Error('Error with population validation!');
  }
});

total.textContent = sum.toLocaleString('en-US');

if (populations.length > 0) {
  average.textContent = (sum / populations.length).toLocaleString('en-US');
} else {
  throw new Error('List of countries is empty!');
}
