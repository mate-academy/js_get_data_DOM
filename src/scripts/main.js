'use strict';

document.addEventListener("DOMContentLoaded", function() {
  const populationElements = document.querySelectorAll(".population");
  let totalPopulation = 0;

  populationElements.forEach((element) => {
    totalPopulation += parseInt(element.textContent.replace(/,/g, ""), 10);
  });

  const numberOfCountries = populationElements.length;
  const averagePopulation = totalPopulation / numberOfCountries;

  const totalPopulationElement = document.querySelector(".total-population");
  const averagePopulationElement = document.querySelector(".average-population");

  totalPopulationElement.textContent = totalPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
  averagePopulationElement.textContent = averagePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
});
