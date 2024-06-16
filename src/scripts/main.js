'use strict';

const populationElements = document.querySelectorAll('.population');

const populationValues =
  [...populationElements].map((element) => {
    const value = element.textContent;

    return Number(value.replaceAll(',', ''));
  }) ?? [];

const total = populationValues.reduce((acc, value) => acc + value, 0);

const average = total / populationValues.length;

const totalSelector = document.querySelector('.total-population');
const averageSelector = document.querySelector('.average-population');

if (totalSelector) {
  totalSelector.innerText = total.toLocaleString('en-US');
}

if (averageSelector) {
  averageSelector.innerHTML = average.toLocaleString('en-US');
}
