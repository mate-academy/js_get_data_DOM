'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const arr = [...population];
const result = arr
  .map((item) => {
    const text = item.textContent.replace(/,/g, '').trim();

    if (!/^\d+(\.\d+)?$/.test(text)) {
      return NaN;
    }

    return parseFloat(text);
  })
  .filter((num) => !isNaN(num));
const total = result.reduce((acc, rec) => acc + rec, 0);
const average = total / result.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
