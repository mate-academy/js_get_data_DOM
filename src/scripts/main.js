'use strict';

const textData = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const numbers = [...textData].map((elem) => +elem.innerHTML.replace(/,/gi, ''));

const total = numbers.reduce(
  (accumulator, current) => accumulator + current,
  0
);

const average = total / numbers.length;

function numberToString(number = 0) {
  return (
    number.toString().split('').reverse().map((elem, index) => {
      if ((index) % 3 === 0 && index !== 0) {
        return elem.concat(',');
      }

      return elem;
    }).reverse().join('')
  );
}

const totalString = numberToString(total);
const averageString = numberToString(average);

totalPopulation.textContent = totalString;
averagePopulation.textContent = averageString;
