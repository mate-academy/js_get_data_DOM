'use strict';

const allSpans = document.querySelectorAll('.population');

const copy = [...allSpans].map(el => Number(el.innerText.replaceAll(',', '')));

const total = copy.reduce((acc, curV) => acc + curV, 0);

const average = total / copy.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString('en-Us');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = average.toLocaleString('en-Us');
