'use strict';

const items = document.querySelectorAll('.population');

const populations = [...items].map(item => item.innerText.split(',').join(''));

const result = populations.reduce((sum, item) => sum + Number(item), 0);

const averagePop = document.querySelector('.average-population');
const totalPop = document.querySelector('.total-population');

totalPop.textContent = result.toLocaleString('en-US');
averagePop.textContent = (result / 10).toLocaleString('en-US');
