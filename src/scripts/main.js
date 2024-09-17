'use strict';

// write your code here

let total = 0;

const list = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

list.forEach((listItem) => {
  const population = listItem.textContent;

  total += +population.replaceAll(',', '');
});

const average = total / list.length;

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
