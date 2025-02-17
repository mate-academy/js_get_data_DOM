'use strict';

window.onload = function () {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    const populationText = el.textContent.replace(/,/g, '');

    return parseInt(populationText, 10);
  });

  const totalPopulation = populations.reduce((acc, val) => acc + val, 0);

  const averagePopultaion = totalPopulation / populations.length;

  const formatNumber = (number) => {
    return number.toLocaleString('uk-UA');
  };

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent = formatNumber(
    Math.round(averagePopultaion),
  );
};
