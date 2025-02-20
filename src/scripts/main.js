'use strict';

// Отримуємо всі елементи з класом "number"
function calculatePopulation() {
  const populationElements = document.querySelectorAll('.population');
  const populations = [];

  // 1. Get text data and convert it to numbers
  populationElements.forEach((el) => {
    const populationStr = el.textContent.replace(/,/g, ''); // Remove commas
    const populationNum = parseInt(populationStr, 10);

    if (!isNaN(populationNum)) {
      populations.push(populationNum);
    }
  });

  // 2. Calculate total and average
  const totalPopulation = populations.reduce((acc, num) => acc + num, 0);
  const averagePopulation = totalPopulation / populations.length;

  // 3. Format numbers with thousand separator
  const formatNumber = (num) => num.toLocaleString();

  document.querySelector('.average-population').textContent =
    formatNumber(averagePopulation);

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);
}

calculatePopulation();
