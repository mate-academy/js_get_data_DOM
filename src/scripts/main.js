'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const elements = [...document.querySelectorAll('.population')];
  const totalPopulation = document.querySelector('.total-population');
  const averagePopulation = document.querySelector('.average-population');

  const total = elements.reduce((acc, item) => {
    return acc + +item.textContent.replaceAll(',', '');
  }, 0);

  totalPopulation.textContent = total.toLocaleString('en-US');

  const average = total / elements.length;

  averagePopulation.textContent = average.toLocaleString('en-US', {
    maximumFractionDigits: 0,
  });
});
