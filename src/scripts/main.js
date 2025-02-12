'use strict';

document.addEventListener("DOMContentLoaded", () => {

  const populationSpans = document.querySelectorAll(".population");

  const numbers = Array.from(populationSpans)
    .map((span) => parseFloat(span.textContent.replace(/,/g, '')))
    .filter((num) => !isNaN(num));

  const total = numbers.reduce((acc, num) => acc + num, 0);
  const average = numbers.length > 0 ? total / numbers.length : 0;

  document.querySelector(".total-population").textContent =
    total.toLocaleString();

  document.querySelector(".average-population").textContent =
    average.toFixed(2);
});
