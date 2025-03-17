const populationSpans = document.querySelectorAll('span.population');

// Функція для перетворення тексту у число з перевіркою
const parsePopulation = (text) => {
  const number = parseInt(text.replace(/,/g, ''), 10);

  return isNaN(number) ? 0 : number; // Повертає 0, якщо число недійсне
};

// Крок 2: Перетворити текстові дані у числа
const populations = Array.from(populationSpans).reduce((acc, span) => {
  acc.push(parsePopulation(span.textContent));

  return acc;
}, []);

// Крок 3: Обчислити загальну та середню кількість населення
const totalPopulation = populations.reduce(
  (sum, population) => sum + population,
  0,
);

const averagePopulation = totalPopulation / populations.length;

// Крок 4: Оновити HTML з відформатованими значеннями
document.querySelector('span.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('span.average-population').textContent =
  Math.round(averagePopulation).toLocaleString();
