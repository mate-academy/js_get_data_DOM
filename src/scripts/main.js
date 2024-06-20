const allItems = [...document.querySelectorAll('span')];

const populations = allItems.filter(
  (element) => element.className === 'population',
);
const total = allItems.filter(
  (element) => element.className === 'total-population',
)[0];
const average = allItems.filter(
  (element) => element.className === 'average-population',
)[0];

const totalResult = populations
  .map((element) => element.textContent.replace(/,/g, ''))
  .reduce((a, b) => Number.parseFloat(a) + Number.parseFloat(b), 0);

const formattedTotal = totalResult.toLocaleString();
const formattedAverage = (totalResult / populations.length).toLocaleString();

total.textContent = formattedTotal;
average.textContent = formattedAverage;
