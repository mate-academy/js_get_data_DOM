const populationElements = document.querySelectorAll('.population');

const populationValues = Array.from(populationElements)
  .map((el) => parseInt(el.textContent.replace(/,/g, ''), 10))
  .filter(Number.isFinite);

const totalPopulation = populationValues.reduce((sum, val) => sum + val, 0);
const averagePopulation =
  populationValues.length > 0 ? totalPopulation / populationValues.length : 0;

const formatNumber = (num) => num.toLocaleString();

const averagePopulationEl = document.querySelector('.average-population');
const totalPopulationEl = document.querySelector('.total-population');

if (averagePopulationEl) {
  averagePopulationEl.textContent = formatNumber(Math.round(averagePopulation));
}

if (totalPopulationEl) {
  totalPopulationEl.textContent = formatNumber(totalPopulation);
}
