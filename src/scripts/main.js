'use strict';

const countries = document.querySelectorAll('.population');

function separator(number) {
  const result = [];
  const arr = Array.from(number + '');
  let count = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (count === 3) {
      result.unshift(',');
      count = 0;
    }

    result.unshift(arr[i]);
    count++;
  }

  return result.join('');
}

function countTotal(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].textContent.split(',').join('');

    if (Number.isFinite(temp)) {
      total += Number.parseInt(temp);
    }
  }

  return total;
}

function countAverage(arr) {
  return Math.round(countTotal(arr) / arr.length);
}

document.querySelector('.total-population').textContent = separator(
  countTotal(countries),
);

document.querySelector('.average-population').textContent = separator(
  countAverage(countries),
);
