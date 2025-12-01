'use strict';

// 1. беру всі span.population
const spans = document.querySelectorAll('.population');

// 2. Перетворюю їх у числа та підрахувати total
let totalPopulation = 0;

for (let i = 0; i < spans.length; i++) {
  const number = Number(spans[i].textContent.replaceAll(',', ''));
  totalPopulation += number;
}

// 3. Обчислити середнє
const averagePopulation = totalPopulation / spans.length;

// 4. Знайти спани для виводу
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

// 5. Відформатувати числа з комами
const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString();

// 6. Вставити числа у HTML
totalSpan.textContent = formattedTotal;
averageSpan.textContent = formattedAverage;
