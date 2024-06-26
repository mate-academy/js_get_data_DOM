'use strict';

// write your code here

document.addEventListener('DOMContentLoaded', function () {
  const populationElement = document.querySelectorAll('.population');
  let totalAmount = 0;
  let count = populationElement.length;

  populationElement.forEach(function (element) {
    const populationText = element.textContent.replace(/,/g, '');
    const populationNumber = parseInt(populationText, 10);

    if (!isNaN(populationNumber)) {
      totalAmount += populationNumber;
    } else {
      count--;
    }
  });

  const averageAmount = totalAmount / count;

  function formatNumber(number) {
    return number.toLocaleString();
  }

  document.querySelector('.total-population').textContent =
    formatNumber(totalAmount);

  document.querySelector('.average-population').textContent =
    formatNumber(averageAmount);
});
