const populationElements = document.querySelectorAll('span.population');

const populations = Array.from(populationElements).map((span) => {
  const populationText = span.textContent.trim();
  const populationNumber = parseInt(populationText.replace(/,/g, ''), 10);

  return !isNaN(populationNumber) ? populationNumber : 0;
});

const totalPopulation = populations.reduce((total, num) => total + num, 0);
const averagePopulation = totalPopulation / populations.length;

const formattedTotal = totalPopulation.toLocaleString('en-US');
const formattedAverage = averagePopulation.toLocaleString('en-US', {
  maximumFractionDigits: 0,
});

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = formattedTotal;
averagePopulationElement.textContent = formattedAverage;
