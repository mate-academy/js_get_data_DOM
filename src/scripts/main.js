'use strict';

// 1: отримання елементу з html;

const element = document.querySelectorAll('span.population');
// 2:перетворення рядка в число
const allText = Array.from(element).map((el) => {
  const value = parseInt(el.textContent.replace(/\D/g, ''));

  return isNaN(value) ? 0 : value;
});
// 3:знаходжу загальне значення

const total = allText.reduce((sum, num) => sum + num, 0);

// 4: середнє значення

const average = total / allText.length;

const formatTotal = total.toLocaleString();
const formatAverage = average.toLocaleString();

document.querySelector('.total-population').textContent = formatTotal;
document.querySelector('.average-population').textContent = formatAverage;
