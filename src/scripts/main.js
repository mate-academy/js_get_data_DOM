'use strict';

const populationElements = document.querySelectorAll('.population');
const pTotalElem = document.querySelector('.total');
const pAverageElem = document.querySelector('.average');

const populationData = [...populationElements].map(element => (
  +element
    .innerText
    .replaceAll(',', '')
));

const populationTotal = populationData
  .reduce((a, b) => a + b);

const populationAverage = Math.floor(
  populationTotal / populationData.length
);

pTotalElem.innerText = `
  Total: ${populationTotal.toLocaleString('en-US')}
`;

pAverageElem.innerText = `
  Average: ${populationAverage.toLocaleString('en-US')}
`;
