'use strict';

const populationSpans = document.querySelectorAll('.population');

const cleanNumbersArray = [...populationSpans].map((span) => {
  const cleanStr = span.textContent.trim().replaceAll(',', '');

  return +cleanStr;
});

let totalPopulation = 0;

for (let i = 0; i < cleanNumbersArray.length; i++) {
  totalPopulation += cleanNumbersArray[i];
}

const averagePopulation = totalPopulation / cleanNumbersArray.length;

function formatNumberWithCommas(number) {
  return number.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

const formattedResult1 = formatNumberWithCommas(totalPopulation);
const formattedResult2 = formatNumberWithCommas(averagePopulation);

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = formattedResult1;
averageSpan.textContent = formattedResult2;
