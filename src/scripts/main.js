'use strict';

const itemsOfPopulation = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const textData
  = [...itemsOfPopulation].map(item => +(item.innerText.replaceAll(',', '')));

const totalAmount = textData.reduce((acc, el) => acc + el, 0);
const averageAmount
  = (textData.reduce((acc, el) => acc + el, 0) / textData.length);

totalPopulation.textContent = totalAmount.toLocaleString('en-US');
averagePopulation.textContent = averageAmount.toLocaleString('en-US');
