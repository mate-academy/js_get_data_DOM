'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const populationSpans = document.querySelectorAll('.population');
  const averageSpan = document.querySelector('.average-population');
  const totalSpan = document.querySelector('.total-population');

  let totalPopulation = 0;
  let validCount = 0;

  populationSpans.forEach(span => {
    const populationText = span.textContent.trim();
    const populationNumber = parseInt(populationText.replace(/,/g, ''));

    if (!isNaN(populationNumber)) {
      totalPopulation += populationNumber;
      validCount++;
    }
  });

  const averagePopulation = totalPopulation / validCount;

  averageSpan.textContent = formatNumberWithCommas(averagePopulation.toFixed(0)
  );
  totalSpan.textContent = formatNumberWithCommas(totalPopulation);
});

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
