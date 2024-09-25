'use strict';

const nodes = document.querySelectorAll('.population').values();
const values = [...nodes].map((node) => +node.textContent.replaceAll(',', ''));

const total = values.reduce((num1, num2) => num1 + num2);
const average = Math.round(total / values.length);

const totalField = document.querySelector('.total');
const averageField = document.querySelector('.average');

totalField.innerText = 'Total: ' + total.toLocaleString('en-US');
averageField.innerText = 'Average: ' + average.toLocaleString('en-US');
