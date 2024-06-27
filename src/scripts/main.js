'use strict';

// write your code here
const populationData = document.querySelectorAll('.population');

const populationText = [];

populationData.forEach((e) => {
  populationText.push(parseInt(e.innerHTML.replace(/,/g, ''), 10));
});

let total = 0;

for (let i = 0; i < populationText.length; i++) {
  total += populationText[i];
}

const average = total / populationText.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

function makeNumberWithComas(number) {
  const stringNumber = number.toString();

  if (stringNumber.length > 3) {
    const splittedStringNum = stringNumber.split('');

    // Цикл для вставки ком
    for (let i = splittedStringNum.length - 3; i > 0; i -= 3) {
      splittedStringNum.splice(i, 0, ',');
    }

    // Повертаємо рядок з вставленими комами
    return splittedStringNum.join('');
  }

  return stringNumber;
}

totalSpan.textContent = makeNumberWithComas(total);
averageSpan.textContent = makeNumberWithComas(average);
