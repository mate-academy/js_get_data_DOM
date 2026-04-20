'use strict';

const elementList = document.querySelectorAll('.list .population');

let count = 0;

const total = [...elementList].reduce((acc, item) => {
  const text = item.textContent.replace(/,/g, '');
  const num = Number(text);

  if (Number.isNaN(num)) {
    return acc;
  }
  count++;

  return acc + num;
}, 0);
const average = total / (count || 1);

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.innerHTML = formattedTotal;
averageElement.innerHTML = formattedAverage;
