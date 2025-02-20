'use strict';

const list = [...document.querySelectorAll('.population')];
const totalNode = document.querySelector('.total-population');
const averageNode = document.querySelector('.average-population');

const numberFormat = (number) => new Intl.NumberFormat('en-US').format(number);

const total = list.reduce(
  (acc, item) => acc + Number(item.textContent.replaceAll(',', '')),
  0,
);
const average = Math.round(total / list.length);

totalNode.textContent = numberFormat(total);
averageNode.textContent = numberFormat(average);
