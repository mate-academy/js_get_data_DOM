'use strict';

function calculateCountryValues(className) {
  const elements = document.getElementsByClassName(className);

  const values = [...elements].map((el) =>
    Number(el.textContent.trim().replace(/,/g, '')),
  );

  const countryCount = values.length;

  const total = values.reduce((sum, num) => sum + num, 0);

  const average = countryCount > 0 ? Math.round(total / countryCount) : 0;

  return [total.toLocaleString('en-US'), average.toLocaleString('en-US')];
}

const [totalFormatted, averageFormatted] = calculateCountryValues('population');

const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

if (totalEl) {
  totalEl.textContent = totalFormatted;
}

if (averageEl) {
  averageEl.textContent = averageFormatted;
}
