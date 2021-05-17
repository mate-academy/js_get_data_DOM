'use strict';

const items = document.querySelectorAll('.population');
const people = [...items].map(item => +item.innerText.replace(/[^0-9]/g, ''));

const total = people.reduce((sum, x) => sum + x, 0);
const average = total / people.length;
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-EN');
averageElement.textContent = average.toLocaleString('en-EN');
