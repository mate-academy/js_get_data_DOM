'use strict';

const populationNodes = document.querySelectorAll('.population');

let total = 0;

for (const populationNode of populationNodes) {
  const population = populationNode.textContent.replaceAll(',', '');

  total += +population;
}

const average = Math.round(total / populationNodes.length);

const totalFormatted = getFormattedValue(String(total));
const averageFormatted = getFormattedValue(String(average));

const totalValue = document.querySelector('.total-population');
const averageValue = document.querySelector('.average-population');

totalValue.textContent = totalFormatted;
averageValue.textContent = averageFormatted;

function getFormattedValue(value) {
  let result = '';

  for (let i = value.length - 1; i >= 0; i--) {
    if (i !== value.length - 1 && (value.length - 1 - i) % 3 === 0) {
      result = ',' + result;
    }

    result = value[i] + result;
  }

  return result;
}
