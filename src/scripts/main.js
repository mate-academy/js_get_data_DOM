'use strict';

// Допоміжна функція для визначення роздільника тисяч
function getThousandsSeparator(spans) {
  const text = spans[0]?.textContent || '';

  if (text.includes(',')) {
    return ',';
  }

  if (text.includes(' ')) {
    return ' ';
  }

  if (text.includes('.')) {
    return '.';
  }

  return ''; // Якщо не знайдено жодного роздільника
}

// Допоміжна функція для форматування числа з потрібним роздільником
function withThousandsSeparator(num, separator) {
  // Використовуємо toLocaleString, що є надійнішим для форматування
  if (separator === ',') {
    return num.toLocaleString('en-US');
  } else if (separator === ' ') {
    return num.toLocaleString('ru-RU'); // Або інша локаль з пробілом
  } else if (separator === '.') {
    return num.toLocaleString('de-DE'); // Або інша локаль з крапкою
  } else {
    return num.toString();
  }
}

// --- Основна логіка ---

const spnPopulation = document.querySelectorAll('span.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let sumAll = 0;
let validCount = 0;

const detectedSeparator = getThousandsSeparator(spnPopulation);

for (let i = 0; i < spnPopulation.length; i++) {
  const textContent = spnPopulation[i].textContent;

  // Видаляємо всі роздільники тисяч, щоб уникнути помилок при парсингу
  const cleanValue = textContent.replace(/[,. ]/g, '');

  const parsedValue = Number(cleanValue);

  if (Number.isFinite(parsedValue)) {
    sumAll += parsedValue;
    validCount++;
  }
}

if (validCount > 0) {
  const averageValue = Math.floor(sumAll / validCount);

  average.textContent = withThousandsSeparator(averageValue, detectedSeparator);
} else {
  average.textContent = '—';
}

total.textContent = withThousandsSeparator(sumAll, detectedSeparator);
