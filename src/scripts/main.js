'use strict';

const buttonAverage = document.getElementById('average');
const buttonSum = document.getElementById('total');
const elements = document.getElementsByClassName('population');
const arrayNumbers = Array.from(elements);
const numbers = arrayNumbers.map(x => x.innerHTML);

const makeAverage = () => {
  let sumAverage = 0;

  for (let i = 0; i < numbers.length; i++) {
    const value = +numbers[i].split(',').join('');

    sumAverage += value;
  }

  const count = arrayNumbers.length;
  const average = sumAverage / count;

  buttonAverage.innerHTML = `${average.toFixed(2)}`;
};

const makeSum = () => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const value = +numbers[i].split(',').join('');

    sum += value;
  }

  buttonSum.innerHTML = `${sum}`;
};

buttonSum.addEventListener('click', makeSum);
buttonAverage.addEventListener('click', makeAverage);
