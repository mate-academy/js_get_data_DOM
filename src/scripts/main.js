'use strict';

const isThousandsSeparator = (str) => {
  const strRes = str.toString().split('');

  for (let i = strRes.length - 4; i >= 0; i -= 3) {
    strRes[i] += ',';
  }

  return strRes.join('');
};

let allOfCountry = document.querySelectorAll('.population');

allOfCountry = [...allOfCountry];

let allValueOfCountry = [];

allOfCountry.map(item => allValueOfCountry.push(item.textContent));

allValueOfCountry = allValueOfCountry.map(x => +x.split(',').join(''));

const sumValueOfAllCountry = allValueOfCountry.reduce((acamulate, current) =>
  acamulate + current);

const avarageValueOfAllCountry = (sumValueOfAllCountry / allOfCountry.length);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = isThousandsSeparator(sumValueOfAllCountry);

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = isThousandsSeparator(avarageValueOfAllCountry);
