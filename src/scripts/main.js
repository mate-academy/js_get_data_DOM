'use strict';


const populationElements = document.querySelectorAll(".population");

const populations = Array.from(populationElements).map(el =>
  Number(el.textContent.replace(/,/g, ''))
);

const total = populations.reduce((sum, n) => sum +n,0);
const average = total / populations.length;

document.querySelector(".total-population").textContent = total.toLocaleString();
document.querySelector(".average-population").textContent = Math.round(average).toLocaleString();

