const populations = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalResult = populations
  .map((element) => element.textContent.replace(/,/g, ''))
  .reduce((a, b) => Number.parseFloat(a) + Number.parseFloat(b), 0);

const formattedTotal = totalResult.toLocaleString();
const formattedAverage = (totalResult / populations.length).toLocaleString();

total.textContent = formattedTotal;
average.textContent = formattedAverage;
