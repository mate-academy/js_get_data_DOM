/* eslint-disable comma-dangle */
/* eslint-disable quotes */
"use strict";

const spanElements = [...document.querySelectorAll(".population")];
const totalElement = document.querySelector(".total-population");
const averageElement = document.querySelector(".average-population");

const arrTexts = spanElements.map(
  (element) => +element.textContent.replaceAll(",", "")
);

let total = 0;
let average = 0;

for (const number of arrTexts) {
  total += number;
  average = total / arrTexts.length;
}

totalElement.textContent = total.toLocaleString("en-US");
averageElement.textContent = average.toLocaleString("en-US");
