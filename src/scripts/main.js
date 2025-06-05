'use strict';

const populationElement = [...document.querySelectorAll('.population')];
const takeText = populationElement.map((el) => el.textContent);
const toNumber = takeText.map((str) => parseFloat(str.replaceAll(',', '')));
const total = toNumber.reduce((sum, n) => sum + n, 0);
const average = Math.round(total / toNumber.length);

const toSameStyle = function (num) {
  return num.toLocaleString();
};

document.querySelector('.total-population').textContent =
  `${toSameStyle(total)}`;

document.querySelector('.average-population').textContent =
  `${toSameStyle(average)}`;
