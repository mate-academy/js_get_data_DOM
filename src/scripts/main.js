'use strict';

// Отримуємо всі елементи з чисельністю населення
const populations = [...document.querySelectorAll('.population')];

let total = 0;
let validCount = 0;

for (const population of populations) {
  // Беремо текст і видаляємо всі символи, крім цифр, крапки та мінуса
  const raw = population.innerText;
  const clean = raw.replace(/[^\d.-]/g, ''); // універсальне очищення

  const n = Number(clean);

  // Перевіряємо, що це дійсне число
  if (Number.isFinite(n)) {
    total += n;
    validCount++;
  }
}

// Обчислюємо середнє, враховуючи лише валідні числа
const average = validCount > 0 ? Math.round(total / validCount) : 0;

// Форматуємо з комами (англійський формат чисел)
const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = average.toLocaleString('en-US');

// Отримуємо елементи для відображення результатів
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

// Захист від null і виведення результатів
if (totalPopulation) {
  totalPopulation.innerText = formattedTotal;
}
if (averagePopulation) {
  averagePopulation.innerText = formattedAverage;
}

// (опціонально) лог для перевірки
console.log('Total:', formattedTotal);
console.log('Average:', formattedAverage);
