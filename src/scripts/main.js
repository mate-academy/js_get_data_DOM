"use strict";

// write your code here
const populationArray = [...document.querySelectorAll(".population")];

const totalPopulation = populationArray.reduce(
  (acc, p) => acc + +p.textContent.split(",").join(""),
  0
);
const averagePopulation = totalPopulation / populationArray.length;

document.querySelector(".average-population").textContent =
  averagePopulation.toLocaleString("en-US");

document.querySelector(".total-population").textContent =
  totalPopulation.toLocaleString("en-US");
