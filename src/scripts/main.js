'use strict';
document.addEventListener('DOMContentLoaded', function() {
  const populationElements = document.querySelectorAll('.population');
  
  const populations = Array.from(populationElements).map(el => {
      const populationText = el.textContent.replace(/,/g, '');
      return parseInt(populationText, 10);
  });
  
  const totalPopulation = populations.reduce((sum, pop) => sum + pop, 0);
  const averagePopulation = totalPopulation / populations.length;
  
  function formatNumberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  const totalPopulationElement = document.querySelector('.total-population');
  const averagePopulationElement = document.querySelector('.average-population');
  
  totalPopulationElement.textContent = formatNumberWithCommas(totalPopulation);
  averagePopulationElement.textContent = formatNumberWithCommas(Math.round(averagePopulation));
});
