'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalPopulation = [...population].reduce(
  (sum, key) => sum + key.textContent.split(',').join('') * 1, 0);

const averagePopulation = totalPopulation / population.length;
// console.log(population.length)

function strChanegThousand(num) {
  const strNum = (num + '');
  let newStr = '';

  for (let i = 1; i <= strNum.length; i++) {
    if (i % 3 === 0 && i !== strNum.length) {
      newStr += strNum[strNum.length - i] + ',';
      continue;
    }
    newStr += strNum[strNum.length - i];
  }

  return newStr.split('').reverse().join('');
}

document.querySelector('.total-population'
).innerHTML = strChanegThousand(totalPopulation);

document.querySelector('.average-population'
).innerHTML = strChanegThousand(averagePopulation);
