'use strict';

const allSpan = document.querySelectorAll('.population');
const allNumber = [];
const totalNumber = document.querySelector('.total-population');
const averageNumber = document.querySelector('.average-population');

allSpan.forEach((item) => {
  const span = Number(item.textContent.replace(/,/g, ''));

  if (!isNaN(span)) {
    allNumber.push(span);
  }
});

if (totalNumber && averageNumber) {
  const total = allNumber.reduce((acc, num) => acc + num, 0);
  const average = total / allNumber.length;

  totalNumber.textContent = total.toLocaleString('en-US');
  averageNumber.textContent = average.toLocaleString('en-US');
}
