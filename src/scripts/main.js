'use strict';

const ol = document.querySelector('.list');

let sum = 0;

for (let i = 0; i < ol.children.length; i++) {
  sum += +ol.children[i]
    .getElementsByTagName('span')
    .item(0)
    .innerText.replaceAll(',', '');
}

const average = sum / ol.children.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = thousandsSeparator(sum);
averagePopulation.innerText = thousandsSeparator(Math.round(average));

function thousandsSeparator(num) {
  const strNum = num.toString();
  let result = '';

  for (let i = strNum.length - 1; i >= 0; i--) {
    if ((strNum.length - i) % 3 === 0 && i !== 0) {
      result = ',' + strNum[i] + result;
    } else {
      result = strNum[i] + result;
    }
  }

  return result;
}
