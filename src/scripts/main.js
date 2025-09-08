'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const spans = document.querySelectorAll('.population');
  const value = Array.from(spans).map((span) => span.textContent.trim());
  let r = 0;
  let validCount = 0;

  function detectThousandsSeparator(strings) {
    const possibleSeparators = new Map();
    const regex = /\d([ ,.])\d{3}(?:\1\d{3})*/g;

    for (const str of strings) {
      let match;
      while ((match = regex.exec(str)) !== null) {
        const separator = match[1];
        possibleSeparators.set(
          separator,
          (possibleSeparators.get(separator) || 0) + 1,
        );
      }
    }

    let mostCommonSeparator = null;
    let maxCount = 0;
    for (const [sep, count] of possibleSeparators) {
      if (count > maxCount) {
        maxCount = count;
        mostCommonSeparator = sep;
      }
    }

    return mostCommonSeparator || ',';
  }

  function formatNumber(num, separator) {
    if (!Number.isFinite(num)) return '0';
    const numStr = Math.floor(num).toString();
    const integerPart = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    const fractionalPart =
      num % 1 !== 0 ? '.' + (num % 1).toString().split('.')[1].slice(0, 2) : '';
    return integerPart + fractionalPart;
  }

  const delimiter = detectThousandsSeparator(value);

  for (let i = 0; i < value.length; i++) {
    let cleanValue = value[i];
    if (delimiter !== '.') {
      cleanValue = cleanValue.replace(new RegExp(`\\${delimiter}`, 'g'), '');
    } else {
      cleanValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, '');
    }
    const parsed = Number(cleanValue);
    if (Number.isFinite(parsed)) {
      r += parsed;
      validCount++;
      console.log(
        `Добавлено: ${parsed}, Текущая сумма: ${r}, Валидных значений: ${validCount}`,
      );
    }
  }

  const totalElement = document.querySelector('.total-population');
  if (totalElement) {
    totalElement.textContent =
      validCount > 0 ? formatNumber(r, delimiter) : '0';
  }

  const averageElement = document.querySelector('.average-population');
  if (averageElement) {
    const average = validCount > 0 ? Math.floor(r / validCount) : 0;
    averageElement.textContent =
      validCount > 0 ? formatNumber(average, delimiter) : '0';
  }
});
