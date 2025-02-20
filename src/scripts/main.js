'use strict';

const values = document.querySelectorAll('.population');
const avarage = document.querySelector('.average-population');
const total = document.querySelector('.total-population');
let totalSum = 0;
let items = 0;

if (avarage && total) {
  for (let i = 0; i < values.length; i++) {
    const value = parseFloat(values[i].textContent);

    if (!isNaN(value)) {
      totalSum += value;
      items++;
    }
  }

  const averageValue = items > 0 ? Math.round(totalSum / items) : 0;

  const formattedTotal = totalSum.toLocaleString();
  const formattedAverage = averageValue.toLocaleString();

  total.textContent(formattedTotal);
  avarage.textContent(formattedAverage);
}
