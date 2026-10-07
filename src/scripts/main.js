const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((element) => {
  const population = element.textContent.replace(/,/g, '');

  return Number(population);
});

const total = populations.reduce((sum, population) => sum + population, 0);

const average = total / populations.length;

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

averageElement.textContent = average.toLocaleString('en-US');
totalElement.textContent = total.toLocaleString('en-US');
