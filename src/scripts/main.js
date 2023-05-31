"use strict";

const population = [...document.querySelectorAll(".population")];
const totalPopulation = document.querySelector(".total-population");
const averagePopulation = document.querySelector(".average-population");

const totalValue = population.reduce((acc, el) => {
  return acc + +el.innerText.split(",").join("");
}, 0);
const averageValue = totalValue / population.length;

totalPopulation.textContent = totalValue.toLocaleString("en-US");
averagePopulation.textContent = averageValue.toLocaleString("en-US");
