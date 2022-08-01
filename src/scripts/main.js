'use strict';

const totalAmountField = document.querySelector('.total-population');
const averageAmountField = document.querySelector('.average-population');
const spans = document.querySelectorAll('.population');

const numbers = [...spans].map(number => +number.textContent.replace(/,/g, ''));
const totalAmount = numbers.reduce((a, b) => a + b);
const averageAmount = totalAmount / numbers.length;

totalAmountField.textContent = totalAmount.toLocaleString('en');
averageAmountField.textContent = averageAmount.toLocaleString('en');
