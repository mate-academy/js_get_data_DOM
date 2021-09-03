'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let count = 0;

// беремо всі данні з html і приводим одрязу до числа
const data = [...population].map((item) => {
  return +item.innerHTML.split(',').join('');
});

// сумма всіх значень
const totalPopulation = data.reduce((x, y) => x + y);

// середнє значення
const avaragePopulation = data.reduce((x, y) => x + y) / data.length;

// привожу наші значення в стрічки
const populationString = String(totalPopulation).split('');
const avarageString = String(avaragePopulation).split('');

// два масива що б задати кінцевим значення потрібний вид
const newPopulationSeparate = [];
const newAvarageSeparate = [];

// функція робить абра-кадабру з масивом і добавляє розділові знаки до чисел
//  я щось не розібрався як використати те що там в readme дали
function calculate(string, separateArr) {
  for (let i = string.length - 1; i >= 0; i--) {
    if (count === 3) {
      separateArr.unshift(',');
      count = 0;
    }
    count++;
    separateArr.unshift(string[i]);
  }
  count = 0;
}

// функція приймає нашу стрічку і пустий масив для зберігання
calculate(populationString, newPopulationSeparate);
calculate(avarageString, newAvarageSeparate);

total.innerHTML = newPopulationSeparate.join('');
average.innerHTML = newAvarageSeparate.join('');
