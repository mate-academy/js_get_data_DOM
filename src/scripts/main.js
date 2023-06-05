'use strict';

const populations = document.querySelectorAll('span.population');
const averageLocator = document.querySelector('span.average-population');
const totalLocator = document.querySelector('span.total-population');

const texts = [...populations].map(x => x.textContent.replaceAll(',', ''));

const total = texts.reduce((a, b) => +a + +b, 0);
const average = total / texts.length;

averageLocator.textContent = average.toLocaleString('en-US');
totalLocator.textContent = total.toLocaleString('en-US');
