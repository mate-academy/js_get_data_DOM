'use strict';
// main.js

// write your code here
document.addEventListener('DOMContentLoaded', () => {
    // 1. Отримати всі текстові дані з span з класом population
    const populationSpans = document.querySelectorAll('.population');
    let numericPopulations = [];

    populationSpans.forEach(span => {
        // Отримати текстовий вміст, наприклад: "1,439,234,240"
        let text = span.textContent;

        // 2. Переконатися, що рядок можна перетворити на число, і перетворити його
        // Видаляємо коми з рядка, щоб його можна було перетворити на число
        let cleanText = text.replace(/,/g, '');
        let number = parseInt(cleanText, 10);
        // Використовуємо parseInt для цілих чисел

        // Перевіряємо, чи це валідне число
        if (!isNaN(number)) {
            numericPopulations.push(number);
        }
        // else {
        // Коментар: Вивід попередження, якщо дані не можуть бути розібрані
        // console.warn(`Could not parse population from "${text}". Skipped.`);
        // }
    });

    // 3. Обчислити середнє та загальне значення на основі розібраних чисел
    let totalPopulation = 0;
    // Перевіряємо, чи є числа для обчислення суми
    if (numericPopulations.length > 0) {
        totalPopulation = numericPopulations.reduce((sum, current) => sum + current, 0);
    }

    let averagePopulation = 0;
    // Перевіряємо, щоб уникнути ділення на нуль
    if (numericPopulations.length > 0) {
        averagePopulation = totalPopulation / numericPopulations.length;
    }

    // 4. Замінити "Calculate it!" обчисленими числами
    // Обчислені середні та загальні числа мають бути розділені роздільником тисяч
    // (той самий числовий стиль, що й представлене населення)

    // Форматуємо загальне населення з роздільником тисяч
    // Використовуємо 'en-US' для ком, щоб відповідати прикладу "1,439,234,240"
    const formattedTotalPopulation = totalPopulation.toLocaleString('en-US');

    // Форматуємо середнє населення з роздільником тисяч, без десяткових знаків
    const formattedAveragePopulation = averagePopulation.toLocaleString(
        'en-US',
        { maximumFractionDigits: 0 }, // Округлення до цілого числа, якщо потрібно
    );

    const averagePopulationSpan = document.querySelector('.average-population');
    const totalPopulationSpan = document.querySelector('.total-population');

    // Оновлюємо вміст відповідних span-елементів
    if (averagePopulationSpan) {
        averagePopulationSpan.textContent = formattedAveragePopulation;
    }
    // else {
    // Коментар: Вивід помилки, якщо елемент не знайдено
    // console.error("Element with class 'average-population' not found.");
    // }

    if (totalPopulationSpan) {
        totalPopulationSpan.textContent = formattedTotalPopulation;
    }
    // else {
    // Коментар: Вивід помилки, якщо елемент не знайдено
    // console.error("Element with class 'total-population' not found.");
    // }

    // console.log("JavaScript task completed!");
    // console.log("Total Population Calculated:", formattedTotalPopulation);
    // console.log("Average Population Calculated:", formattedAveragePopulation);
});
