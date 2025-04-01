'use strict';

const populations = document.querySelectorAll('.population');

let sum = 0;
let count = 0;
let average = 0;

populations.forEach((element) => {
  const cleanedValue = element.textContent.replace(/[^\d.]/g, '');

  const populationValue = parseFloat(cleanedValue);

  if (!isNaN(populationValue)) {
    sum += populationValue;
    count++;
  }
});

if (count > 0) {
  average = sum / count;
}

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

if (totalElement) {
  totalElement.textContent = `${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`)}`;
}

if (averageElement) {
  averageElement.textContent = `${average.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, `,`)}`;
}
