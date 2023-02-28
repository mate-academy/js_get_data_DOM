'use strict';

const texts = document.querySelectorAll('.population');
const digits = [...texts].map(text => Number(text.innerText.replace(/,/g, '')));
const totalAmount = digits.reduce((sum, num) => sum + num);
const averageAmount = Math.round(totalAmount / digits.length);
const numberFormat = new Intl.NumberFormat('en-US');
const averagePopulation = numberFormat.format(averageAmount);
const totalPopulation = numberFormat.format(totalAmount);

document.querySelector('.total-population').textContent = totalPopulation;
document.querySelector('.average-population').textContent = averagePopulation;
