// 1.  всі span.population
const spans = document.querySelectorAll('.population');

// 2. Перетворити їх у числа та підрахувати total
let totalPopulation = 0;
let validCount = 0; // для підрахунку кількості валідних чисел

for (let i = 0; i < spans.length; i++) {
  const text = spans[i].textContent.replaceAll(',', '');
  const number = Number(text);

  // 3. Перевіряємо, чи це дійсне число
  if (!isNaN(number)) {
    totalPopulation += number;
    validCount++; // збільшуємо лічильник валідних чисел
  }
}

// 4. Обчислити середнє тільки на основі валідних чисел
const averagePopulation = totalPopulation / validCount;

// 5. Знайти спани для виводу
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

// 6. Відформатувати числа з комами
const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = Math.round(averagePopulation).toLocaleString();

// 7. Вставити числа у HTML
totalSpan.textContent = formattedTotal;
averageSpan.textContent = formattedAverage;
