'use strict';

function getThousSep(number) {
  return number.toLocaleString('en-Us');
}

const totalHtml = document.querySelector('.total-population');
const averageHtml = document.querySelector('.average-population');
let allNum = document.querySelectorAll('.population');

allNum = [...allNum].map(num => num.textContent)
  .map(num => num.replaceAll(',', ''))
  .map(num => +num);

const total = allNum.reduce((sum, x) => sum + x, 0);
const aver = total / allNum.length;

totalHtml.textContent = getThousSep(total);
averageHtml.textContent = getThousSep(aver);
