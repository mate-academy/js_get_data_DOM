/* eslint-disable quotes */
"use strict";

const textDataSpan = document.querySelectorAll("span.population");
const total = document.querySelector(".total-population");
const average = document.querySelector(".average-population");

const data = [...textDataSpan].map((item) => item.innerText);
const dataToNumber = data.map((item) => {
  return Number(item.replaceAll(",", ""));
});
const totalValue = dataToNumber.reduce((sum, cur) => {
  return sum + cur;
}, 0);

const averageValue = totalValue / dataToNumber.length;

total.innerText = totalValue;

average.innerText = averageValue;
