'use strict';

// write your code here

const populationsElems = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const sampleText = populationsElems[0]?.textContent.trim() || '0';
const sepMatch = sampleText.match(/[\s.,](?=\d{3}\b)/);
const separator = sepMatch ? sepMatch[0] : ',';

const populations = [...populationsElems]
  .map((el) => {
    const text = el.textContent.trim();
    const cleaned = text.replace(new RegExp(`\\${separator}`, 'g'), '');
    const num = Number(cleaned);

    return Number.isFinite(num) ? num : null;
  })
  .filter((num) => num !== null);

const total = populations.reduce((acc, num) => acc + num, 0);
const average = populations.length ? Math.round(total / populations.length) : 0;

function formatNumber(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

totalPopulation.textContent = formatNumber(total);
averagePopulation.textContent = formatNumber(average);
