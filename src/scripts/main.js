function updatePopulationStatistics() {
  const populationElements = document.querySelectorAll('span.population');
  const numbers = [];

  let groupingSeparator = ',';
  const totalSpan = document.querySelector('.total-population');
  const averageSpan = document.querySelector('.average-population');

  // Визначення роздільника та збір чисел
  populationElements.forEach((element, index) => {
    const rawText = element.textContent.trim();

    if (!/\d/.test(rawText)) {
      return; // Пропускаємо елементи без цифр
    }

    if (index === 0) {
      // Це відповідає вашому HTML (кома).
      const match = rawText.match(/\d([^\d.-])\d/);

      if (match && match[1]) {
        groupingSeparator = match[1];

        if (groupingSeparator === ' ') {
        }
      }
    }

    // Видаляємо всі роздільники, крім десяткової крапки (якщо є)
    // Якщо наш роздільник був комою, ми видаляємо всі коми.
    const cleanedText = rawText.replace(
      new RegExp('\\' + groupingSeparator, 'g'),
      '',
    );

    const numValue = Number(cleanedText.replace(',', '.'));

    if (!isNaN(numValue) && isFinite(numValue)) {
      numbers.push(numValue);
    }
  });

  // 3. Захист від порожніх даних
  if (numbers.length === 0) {
    if (totalSpan) {
      totalSpan.textContent = '0';
    }

    if (averageSpan) {
      averageSpan.textContent = '0';
    }

    return;
  }

  // 4. Обчислення
  const total = numbers.reduce((sum, current) => sum + current, 0);
  const average = total / numbers.length;

  const tempFormatter = new Intl.NumberFormat('en-US');
  const tempFormatResult = tempFormatter.format(1000000);
  const defaultSeparator = tempFormatResult.charAt(1);

  const customFormatter = (num) => {
    const formatted = tempFormatter.format(Math.round(num));

    return formatted.replace(
      new RegExp('\\' + defaultSeparator, 'g'),
      groupingSeparator,
    );
  };

  if (totalSpan) {
    const formattedTotal = customFormatter(total);

    totalSpan.textContent = formattedTotal;
  }

  if (averageSpan) {
    const formattedAverage = customFormatter(average);

    averageSpan.textContent = formattedAverage;
  }
}

document.addEventListener('DOMContentLoaded', updatePopulationStatistics);
