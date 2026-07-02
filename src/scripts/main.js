'use strict';

const elements = [...document.querySelectorAll('.population')];

const total = elements.reduce((acc, element) => {
  const population = Number(element.textContent.replace(/,/g, ''));

  return acc + population;
}, 0);

const average = Math.floor(total / elements.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
