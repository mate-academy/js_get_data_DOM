'use strict';

const elementList = [...document.querySelectorAll('.population')];

const elementNumbers = elementList
  .map((el) => {
    const populationText = el.textContent.trim();

    const populationNumber = parseInt(populationText.replace(/,/g, ''));

    return populationNumber;
  })
  .filter((num) => num !== null);

const total = elementNumbers.reduce(
  (acc, elementNumber) => acc + elementNumber,
  0,
);

const average = total / elementList.length;

const totalFormatted = total.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

document.querySelector('.total-population').textContent = totalFormatted;
document.querySelector('.average-population').textContent = averageFormatted;
