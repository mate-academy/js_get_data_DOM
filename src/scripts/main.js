const populationSpans = document.querySelectorAll('.population');

let totalPopulation = 0;

populationSpans.forEach((span) => {
  const populationString = span.textContent.replace(/,/g, '');
  const populationNumber = parseInt(populationString, 10);

  totalPopulation += populationNumber;
});

const averagePopulation = totalPopulation / populationSpans.length;

const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = averagePopulation.toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
