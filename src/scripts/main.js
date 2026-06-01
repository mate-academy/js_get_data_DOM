'use strict';


const populationElements = document.querySelectorAll(".population");

const populations = Array.from(populationElements).map(el => {
  const num = Number(el.textContent.replace(/,/g, ''));

  return Number.isNaN(num) ? 0 : num;
});

const total = populations.reduce((sum, n) => sum +n,0);
const average = total / populations.length;

document.querySelector(".total-population").textContent = total.toLocaleString();
document.querySelector(".average-population").textContent = Math.round(average).toLocaleString();

