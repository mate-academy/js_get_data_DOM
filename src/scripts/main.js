'use strict';

const itemsPopulation = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const countries = document.querySelector('.list');
const countCountries = countries.children.length;

const totalPopulation = [...itemsPopulation].reduce((prev, item) => {
  const commaWithout = item.textContent.split(',');
  const content = commaWithout.join('');
  const fullNumber = Number(content);

  return fullNumber + prev;
}, 0);

function GetThousandsFormat(num) {
  const str = String(num);
  const arrComma = [];

  for (let i = (str.length - 1); i >= 0; i -= 3) {
    if (i <= 1) {
      arrComma.push(str.slice(0, i + 1));
    } else {
      arrComma.push(str.slice(i - 2, i + 1));
    }
  }

  return arrComma.reverse().join(',');
};

total.textContent = GetThousandsFormat(totalPopulation);
average.textContent = GetThousandsFormat(totalPopulation / countCountries);
