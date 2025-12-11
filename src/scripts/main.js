'use strict';

const avarageButton = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');
const numbers = [...document.querySelectorAll('.population')].map((el) =>
  Number(el.textContent.replaceAll(',', ''))
);

totalPopulation.addEventListener('click', () => {
  calculateTotal();
});

avarageButton.addEventListener('click', () => {
  calculateAvarage();
});

function calculateTotal() {
  const counter = numbers.reduce((sum, n) => sum + n, 0);
  const formattedCounter = counter.toLocaleString('en-US');

  totalPopulation.textContent = formattedCounter;
}

function calculateAvarage() {
  const counter = numbers.reduce((sum, n) => sum + n, 0);
  const avarageNumber = counter / numbers.length;
  const formattedCounter = avarageNumber.toLocaleString('en-US');

  totalPopulation.textContent = formattedCounter;
}
