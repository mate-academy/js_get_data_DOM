const populations = [...document.querySelectorAll('span.population')];
const totalEl = document.querySelector('span.total-population');
const averageEl = document.querySelector('span.average-population');

const total = populations.reduce((prev, span) => {
  const population = +span.textContent.replaceAll(',', '');

  return prev + population;
}, 0);

const average = total / populations.length;

totalEl.textContent = total.toLocaleString('en-US');
averageEl.textContent = average.toLocaleString('en-US');
