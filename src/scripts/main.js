'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

const normalizedList = [...populationList].map((el) => {
  return Number(el.textContent.replaceAll(',', ''));
});

const sum = normalizedList.reduce((acc, el) => acc + el, 0);

const average = Math.floor(sum / normalizedList.length);

function separateNumber(number, separator, groupLength) {
  const groups = [];
  const normalizedNumber = number.toString();

  for (let i = normalizedNumber.length; i > 0; i -= groupLength) {
    let indexToStart = i - groupLength;
    const indexToEnd = i;

    if (indexToStart < 0) {
      indexToStart = 0;
    }
    groups.push(normalizedNumber.slice(indexToStart, indexToEnd));
  }

  return groups.reverse().join(separator);
}

totalPopulationSpan.textContent = separateNumber(sum, ',', 3);
averagePopulationSpan.textContent = separateNumber(average, ',', 3);
