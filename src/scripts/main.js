'use strict';

const tags = document.querySelectorAll('.population');
const population = [...tags].map(item => +item.textContent.replace(/,/g, ''));
const total = population.reduce((sum, item) => sum + item, 0);
const average = total / population.length;

document.querySelector('.total').textContent = `Total: ${total}`;
document.querySelector('.average').textContent = `Average: ${average}`;
