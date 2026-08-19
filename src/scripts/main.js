'use strict';

// write your code here
const containerElement = document.querySelector('.container');
const listElement = containerElement.querySelector('.list');
const itemsElement = listElement.querySelectorAll('.list__item');

const totalPopElement = containerElement.querySelector('.total-population');
const averagePopElement = containerElement.querySelector('.average-population');

const populations = [...itemsElement]
  .map((element) => {
    const populationsText = element.querySelector('.population').textContent;

    return Number(populationsText.replace(/,/g, ''));
  })
  .filter((value) => Number.isFinite(value));

const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

totalPopElement.textContent = total.toLocaleString('en-US');
averagePopElement.textContent = Math.round(average).toLocaleString('en-US');
