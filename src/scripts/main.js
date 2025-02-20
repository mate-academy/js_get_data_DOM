'use strict';

const elementPopulationClass = document.getElementsByClassName('population');

let total = 0;

for (const numbersPeople of elementPopulationClass) {
  total += Number(numbersPeople.textContent.split(',').join(''));
}

const avarageValue = total / elementPopulationClass.length;

const totalElement = document.getElementsByClassName('total-population');

totalElement[0].textContent = total.toLocaleString('en-US');

const avarageElement = document.getElementsByClassName('average-population');

avarageElement[0].textContent = avarageValue.toLocaleString('en-US');
