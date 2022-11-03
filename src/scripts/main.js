'use strict';

function getThousandSeparator(number) {
  return number.toLocaleString('en-Us');
}

const totalHtml = document.querySelector('.total-population');
const averageHtml = document.querySelector('.average-population');
let allNum = document.querySelectorAll('.population');

allNum = [...allNum].map(num => +num.textContent.replaceAll(',', ''));

const total = allNum.reduce((sum, x) => sum + x, 0);
const average = total / allNum.length;

totalHtml.textContent = getThousandSeparator(total);
averageHtml.textContent = getThousandSeparator(average);
