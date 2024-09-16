'use strict';

const populationList = document.querySelectorAll('.population');

const populationTextList = [...populationList].map(text => text.innerText);

const populationNumbersList = populationTextList.map(text => {
  const number = text.replace(/,/g, '');

  if (typeof Number(number) === 'number') {
    return Number(number);
  };
});

let total = populationNumbersList.reduce((acc, current) =>
  acc + current);

let avarage = total / populationNumbersList.length;

const splitedAvarage = String(avarage).split('');
const splitedTotal = String(total).split('');

for (let i = splitedAvarage.length - 3; i > 0;) {
  splitedAvarage.splice(i, 0, ',');
  i -= 3;
}

for (let i = splitedTotal.length - 3; i > 0;) {
  splitedTotal.splice(i, 0, ',');
  i -= 3;
}

total = splitedTotal.join('');
avarage = splitedAvarage.join('');

const totalPage = document.querySelector('.total-population');

totalPage.textContent = total;

const avaragePage = document.querySelector('.average-population');

avaragePage.textContent = avarage;
