'use strict';

const populations = document.querySelectorAll('.population');
const totalPoputationCage = document.querySelector('.total-population');
const averageCage = document.querySelector('.average-population');
const popArr = [];

populations.forEach((elem) => popArr.push(+elem.textContent.replace(/,/g, '')));

const totalPoputation = popArr.reduce((a, b) => a + b);

totalPoputationCage.textContent = totalPoputation.toLocaleString('en-US');

averageCage.textContent
= (totalPoputation / populations.length).toLocaleString('en-US');
