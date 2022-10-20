'use strict';

const population = document.querySelectorAll('.population');

const normalizePopulation
= [...population].map(text => parseInt(text.innerText.split(',').join('')));

const total = normalizePopulation.reduce((initial, next) => initial + next, 0);

const average = total / normalizePopulation.length;

const totalOnPage = document.querySelector('.total-population');

const averageOnPage = document.querySelector('.average-population');

totalOnPage.innerText = total.toLocaleString('en-US');

averageOnPage.innerText = average.toLocaleString('en-US');
