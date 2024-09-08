'use strict';

// отримання елементів з класом population
const populations = document.querySelectorAll('.population');

// перетворення в масив
const populationNumbers = Array.from(populations).map((population) => {
  return parseInt(population.textContent.replace(/,/g, ''), 10);
  // видалення коми з чисел, перетворення рядків на числа
});

// загальна кількість населення
const totalPopulation = populationNumbers.reduce((acc, num) => acc + num, 0);

// середня кількість населення
const averagePopulation = Math.round(
  totalPopulation / populationNumbers.length,
);

// форматування чисел з роздільником тисяч
function formatNumber(num) {
  return num.toLocaleString();
}

// елементи, де потрібно вставити результати
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

// заміна тексту на обчислені значення
totalPopulationElement.textContent = formatNumber(totalPopulation);
averagePopulationElement.textContent = formatNumber(averagePopulation);
