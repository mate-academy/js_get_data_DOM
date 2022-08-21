'use strict';

const populationField = document.querySelectorAll('.population');

const totalField = document.querySelector('.total-population');
const averageField = document.querySelector('.average-population');

const numbers = [...populationField]
  .map(number => +number.textContent.replaceAll(',', ''));

const totalAmount = numbers.reduce((sum, number) => sum + number);
const averageAmount = totalAmount / numbers.length;

totalField.textContent = totalAmount.toLocaleString('en');
averageField.textContent = averageAmount.toLocaleString('en');
