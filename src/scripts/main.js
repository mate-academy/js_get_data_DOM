'use strict';

const populationNodes = document.querySelectorAll('.population');

let total = 0;
let validCount = 0;

populationNodes.forEach((node) => {
  const rawText = node.textContent.replace(/,/g, '');
  const populationNumber = Number(rawText);

  if (!isNaN(populationNumber) && rawText.trim() !== '') {
    total += populationNumber;
    validCount++;
  }
});

const average = validCount > 0 ? Math.round(total / validCount) : 0;

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

if (averageElement) {
  averageElement.textContent = average.toLocaleString('en-US');
}

if (totalElement) {
  totalElement.textContent = total.toLocaleString('en-US');
}
