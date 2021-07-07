'use strict';

const isThousandsSeparator = (str) => {
  const strRes = str.toString().split('');

  for (let i = strRes.length - 4; i >= 0; i -= 3) {
    strRes[i] += ',';
  }

  return strRes.join('');
};

let allValueOfCountry = [];

let allOfCountry = document.querySelectorAll('.population');

allOfCountry = [...allOfCountry];

allOfCountry.map(item => allValueOfCountry.push(item.textContent));
allValueOfCountry = allValueOfCountry.map(x => +x.split(',').join(''));

const sumValueOfAllCountry = allValueOfCountry.reduce((acamulate, current) =>
  acamulate + current);
const avarageValueOfAllCountry = (sumValueOfAllCountry / allOfCountry.length);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = isThousandsSeparator(sumValueOfAllCountry);

averagePopulation.textContent = isThousandsSeparator(avarageValueOfAllCountry);
