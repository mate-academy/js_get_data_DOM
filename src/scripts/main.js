'use strict';

const allData = document.querySelectorAll('.population');

const number = Array.from(allData).map((element) => {
  const toText = element.textContent;
  const replaced = toText.replace(/,/g, '');

  return Number(replaced);
});

const total = number.reduce((sum, current) => sum + current, 0);
const average = total / number.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
