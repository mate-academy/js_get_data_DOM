'use strict';

const collection = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const list = [...collection].map((item) => {
  let num = item.textContent;

  while (num.includes(',')) {
    num = num.replace(/,/, '');
  }

  return parseInt(num);
});

const total = list.reduce((acc, num) => acc + num, 0);
const average = (total / list.length);

totalElement.textContent = total.toLocaleString('en');
averageElement.textContent = average.toLocaleString('en');
