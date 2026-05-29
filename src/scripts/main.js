'use strict';

const populationElements = document.querySelectorAll('.population');

let total = 0;
const count = populationElements.length;

populationElements.forEach((el) => {
  const clearNumber = Number(el.textContent.replace(/,/g, ''));

  if (!isNaN(clearNumber)) {
    total += clearNumber;
  }
});

const average = total / count;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString();
averageElement.textContent = average.toLocaleString();
