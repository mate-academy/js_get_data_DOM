'use strict';

const arrSpans = [...document.querySelectorAll('span.population')];

const arrPopulationSpans = arrSpans.map((span) => {
  const number = Number(span.textContent.replaceAll(',', ''));

  if (span && isFinite(number)) {
    return number;
  }
});

function commaSeparation(num) {
  const arrNum = num.toString().split('');

  for (let i = arrNum.length - 3; i > 0; i -= 3) {
    arrNum[i] = ',' + arrNum[i];
  }

  return arrNum.join('').toString();
}

if (arrPopulationSpans.length > 0) {
  const sumPopulation = arrPopulationSpans.reduce((sum, num) => {
    return sum + num;
  });

  const totalPopulation = commaSeparation(sumPopulation);

  const calcAveragePopulation = Math.round(
    sumPopulation / arrPopulationSpans.length,
  );

  const averagePopulation = commaSeparation(calcAveragePopulation);

  const totalPopulationSpan = document.querySelector('.total-population');
  const averagelPopulationSpan = document.querySelector('.average-population');

  totalPopulationSpan.textContent = totalPopulation;
  averagelPopulationSpan.textContent = averagePopulation;
}
