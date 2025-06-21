'use strict';

const spans = document.querySelectorAll('.population');

const populations = Array.from(spans).map((span) => {
  return Number(span.textContent.replace(/,/g, ''));
});

const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const formatNumber = (num) => num.toLocaleString('en-US');

totalElement.textContent = formatNumber(total);
averageElement.textContent = formatNumber(average);
