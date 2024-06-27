'use strict';

const allSpanPopulation = document.querySelectorAll('.population');
const total = document.getElementById('total-population');
const avg = document.getElementById('average-population');

const render = () => {
  const populations = Array.from(allSpanPopulation).map(
    (span) => +span.textContent.replaceAll(',', ''),
  );

  const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);

  const averagePopulation = totalPopulation / populations.length;

  total.textContent = `${totalPopulation.toLocaleString('en-US')}`;
  avg.textContent = `${averagePopulation.toLocaleString('en-US')}`;
};

document.addEventListener('DOMContentLoaded', render);
