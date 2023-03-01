'use strict';

const populationItem = document.querySelectorAll('.population');

const arrayOfNumbers = [...populationItem].map(item =>
  strToNum(item.innerText)).filter(num => !isNaN(num));
// console.log(arrayOfNumbers);

const total = arrayOfNumbers.reduce((accumulator, currentValue) =>
  accumulator + currentValue);
// console.log(totalSum);

const result = total.toLocaleString('en-US');
// для форматирования числового значения total в строку
// такое форматирование включает в себя разделение чисел запятым
// console.log(result);

const average = total / arrayOfNumbers.length;

const resultAver = average.toLocaleString('en-US');

function strToNum(str) {
  return parseInt(str.replace(/,/g, ''));
}

const totalPop = document.querySelector('.total-population');

// выбор элемента на веб-странице с классом total-population
// Элемент, найденный с помощью этого метода, сохраняется в переменной totalPop.
// console.dir(totalPop);

totalPop.textContent = result;
// значение, содержащееся в переменной result,
// будет присвоено для свойства textContent в объект totalPop

const averagePop = document.querySelector('.average-population');

averagePop.textContent = resultAver;
