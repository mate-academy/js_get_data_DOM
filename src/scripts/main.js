'use strict';

const elements = [...document.querySelectorAll('.population')];
const numbers = [];

elements.forEach((element) => {
  const numStr = element.textContent.trim().split(',').join('');
  const num = Number(numStr); // Преобразуем строку в число

  numbers.push(num);
});

function sumNumbers() {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum.toLocaleString('en-US');
}

function averageNumbers() {
  let average = 0;

  for (let i = 0; i < numbers.length; i++) {
    average += numbers[i];
  }

  const avarageNum = average / numbers.length;

  return avarageNum.toLocaleString('en-US');
}

const textSumContent = document.querySelector('.total-population'); // sum all

textSumContent.innerHTML = `${sumNumbers()}`;

const textAverageContent = document.querySelector('.average-population'); // avg

textAverageContent.innerHTML = `${averageNumbers()}`;
