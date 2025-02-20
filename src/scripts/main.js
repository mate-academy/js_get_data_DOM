'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((element) => {
  // Удаляем запятые из строки населения и преобразуем в число
  return parseInt(element.textContent.replace(/,/g, ''), 10);
});

const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);

const averagePopulation = totalPopulation / populations.length;

const totalPopulationElement = document.querySelector('.total-population');
const avPopulationElement = document.querySelector('.average-population');

// Прямо вставляем числа с разделителями тысяч, используя toLocaleString()
totalPopulationElement.innerText = totalPopulation.toLocaleString();

avPopulationElement.innerText = Math.round(averagePopulation).toLocaleString();
