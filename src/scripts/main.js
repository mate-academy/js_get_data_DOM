'use strict';

const elements = document.querySelectorAll('.population');
const statistic = [];

for (const element of elements) {
  statistic.push(Number(element.textContent.replaceAll(',', '')));
}

const totalElement = document.querySelector('.total-population');
const totalValue = statistic.reduce((sum, item) => sum + item, 0);

totalElement.textContent = '';

totalElement.insertAdjacentText(
  'afterbegin',
  totalValue.toLocaleString('en-US'),
);

const average = document.querySelector('.average-population');

average.textContent = '';

average.insertAdjacentText(
  'afterbegin',
  Math.ceil(totalValue / statistic.length).toLocaleString('en-US'),
);
