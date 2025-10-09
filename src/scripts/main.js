'use strict';

const allPopulation = document.querySelectorAll('.population');
const ArrayPopulation = Array.from(allPopulation);
const average = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const raw = ArrayPopulation.map((el) => el.textContent.trim());
const cleaned = raw.map((v) => +v.replace(/,/g, ''));
const total = cleaned.reduce((prev, item) => prev + item, 0);
const averageValue = total / cleaned.length;
const newFormat = averageValue.toLocaleString('uk-UA');
const newTotal = total.toLocaleString('uk-UA');

average.textContent = newFormat;
totalPopulation.textContent = newTotal;
