'use strict';

const extractedText = document.querySelectorAll('.population');
const allPopulation = [];

for (let i = 0; i < extractedText.length; i++) {
  const string = extractedText[i].textContent;

  const editedStr = string.replaceAll(',', '');

  allPopulation.push(Number(editedStr));
}

const total = allPopulation.reduce((el1, el2) => el1 + el2);
const avarage = total / allPopulation.length;

const newAvarage = document.querySelector('.average-population');

newAvarage.textContent = avarage.toLocaleString('en-US');

const newTotal = document.querySelector('.total-population');

newTotal.textContent = total.toLocaleString('en-US');
