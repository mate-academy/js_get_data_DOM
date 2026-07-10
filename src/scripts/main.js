'use strict';

// write your code here
const populations = document.querySelectorAll('.population');

const popList = [...populations].map((item) => {
  return Number(item.textContent.split(',').join(''));
});

const total = popList.reduce((tot, num) => tot + num, 0);
const average = Math.round(total / popList.length);

const totalElement = document.querySelector('.total-population');

totalElement.textContent = total.toLocaleString();

const averageElement = document.querySelector('.average-population');

averageElement.textContent = average.toLocaleString();
