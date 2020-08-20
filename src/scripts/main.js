'use strict';

const items = document.querySelectorAll('.population');

const numbers = [...items].map(item => +item.innerText.split(',').join(''));
const total = numbers.reduce((acc, num) => (acc + num), 0);

const totalOnPage = total.toLocaleString('en');
const averageOnPage = (total / numbers.length).toLocaleString('en');

document.querySelector('.total-population').textContent = totalOnPage;
document.querySelector('.average-population').textContent = averageOnPage;
