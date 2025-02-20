const populationElements = document.querySelectorAll('.population');
let totalPopulation = 0;

populationElements.forEach((element) => {
  totalPopulation += parseInt(element.textContent.replace(/,/g, ''), 10);
});

const averagePopulation = totalPopulation / populationElements.length;

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-Us');

averagePopulationElement.textContent =
  averagePopulation.toLocaleString('en-Us');
