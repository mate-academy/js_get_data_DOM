'use strict';

const population = document.querySelectorAll('.population');

const arr = [...population].map((element) => {
  const value = element.textContent;

  const number = value.replaceAll(',', '');

  return Number(number);
});

const totalValue = arr.reduce((acc, elem) => acc + elem, 0);
const averageValue = totalValue / arr.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerText = totalValue.toLocaleString('en-US');
average.innerText = averageValue.toLocaleString('en-US');
