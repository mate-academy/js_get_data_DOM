'use strict';

// write your code here
const populationElements = document.querySelectorAll('span.population');

// 2. Переконатися, що рядок можна конвертувати в число
const populations = [...populationElements]
  .map((el) => {
    const text = el.textContent.trim().replace(/[,\s\u00A0]/g, '');
    const value = Number(text);

    return Number.isFinite(value) ? value : null;
  })
  .filter((value) => value !== null);

// 3. Обчислити загальне й середнє значення
const totalPopulation = populations.reduce((prev, curr) => prev + curr, 0);
const avgPopulation = populations.length
  ? Math.round(totalPopulation / populations.length)
  : 0;

// 4. Визначити стиль роздільника тисяч (по першому валідному прикладу)
let separator = ',';
const sample = populationElements[0]?.textContent || '';

if (/\u00A0/.test(sample)) {
  separator = '\u00A0';
} else if (/\s/.test(sample)) {
  separator = ' ';
}

// Функція форматування з урахуванням роздільника
const formatNumber = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

// 5. Замінити "Calculate it!" у відповідних span
const totalEl = document.querySelector('span.total-population');
const averageEl = document.querySelector('span.average-population');

if (totalEl) {
  totalEl.textContent = formatNumber(totalPopulation);
}

if (averageEl) {
  averageEl.textContent = formatNumber(avgPopulation);
}
