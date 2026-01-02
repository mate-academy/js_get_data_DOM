'use strict';

  const population = [...document.querySelectorAll('.population')];
  const total = document.querySelector('.total-population');
  const averagePopulation = document.querySelector('.average-population');

  const sum = population.reduce((acc, el) => {
    const num = Number(el.textContent.replace(/,/g, ''));

    return acc + (isNaN(num) ? 0 : num);
  }, 0);

  const average = Math.round(sum / population.length);

  if (total && averagePopulation) {
    total.innerText = sum.toLocaleString();
    averagePopulation.innerHTML = average.toLocaleString();
  }

