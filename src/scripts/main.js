'use strict';

const allData = document.querySelectorAll('.population');
const values = Array.from(allData).map((el) => el.textContent.trim());
const numbers = values.map((val) => Number(val.replaceAll(',', '')));

const total = numbers.reduce((sum, current) => sum + current, 0);
const average = total / numbers.length;

const formattedTotal = total.toLocaleString();
const formattedAverage = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
