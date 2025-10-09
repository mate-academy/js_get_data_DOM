'use strict';

const allPopulation = document.querySelectorAll('.population');
const ArrayPopulation = Array.from(allPopulation);
const average = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const raw = ArrayPopulation.map((el) => el.textContent.trim());
const cleaned = raw.map((v) => v.replace(/,/g, ''));
const valid = cleaned.map((v) => +v).filter(Number.isFinite);
const total = valid.reduce((prev, item) => prev + item, 0);
const averageValue = total / valid.length;

if (valid.length === 0) {
  average.textContent = '';
  totalPopulation.textContent = '';
} else {
  const newFormat = averageValue.toLocaleString('en-US');
  const newTotal = total.toLocaleString('en-US');

  average.textContent = newFormat;
  totalPopulation.textContent = newTotal;
}
