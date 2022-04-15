'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averegePopulation = document.querySelector('.average-population');

const total = [...populations].reduce((sum, population) => {
  const number = parseInt(population.innerText.split(',').join(''));

  return sum + number;
}, 0);

function edit(str) {
  const disassembled = [];
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    disassembled.push(str[i]);
    count++;

    if (count % 3 === 0 && i !== 0) {
      disassembled.push(',');
    };
  }

  return disassembled.reverse().join('');
}

const average = total / populations.length;

totalPopulation.innerText = edit(total.toString());
averegePopulation.innerText = edit(average.toString());
