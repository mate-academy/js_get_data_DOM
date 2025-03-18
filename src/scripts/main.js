'use strict';

function convertStrToNum(text) {
  return +String(text).replaceAll(',', '');
}

function convertNumToStr(number) {
  return new Intl.NumberFormat('en').format(number);
}

function totalPopulation() {
  const totalPopulationStr = [
    ...document.querySelectorAll('span.population'),
  ].reduce((sum, element) => sum + convertStrToNum(element.innerText), 0);

  return convertNumToStr(totalPopulationStr);
}

function avaragePopulation() {
  return convertNumToStr(
    Math.round(
      convertStrToNum(totalPopulation()) /
        [...document.querySelectorAll('span.population')].length,
    ),
  );
}

document.querySelector('span.total-population').innerText = totalPopulation();

document.querySelector('span.average-population').innerText =
  avaragePopulation();
// fsdf
