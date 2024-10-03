'use strict';

// write your code here
'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', function () {
  const populationElements = document.querySelectorAll('.population');

  const populationNumbers = Array.from(populationElements).map((element) => {
    const number = parseFloat(element.textContent.replace(/,/g, ''));

    return isNaN(number) ? 0 : number;
  });

  const totalPopulation = populationNumbers.reduce(
    (acc, curr) => acc + curr,
    0,
  );
  const averagePopulation = totalPopulation / populationNumbers.length;

  const formatNumber = (num) => num.toLocaleString('en-US');

  document.querySelector('.total-population').textContent =
    formatNumber(totalPopulation);

  document.querySelector('.average-population').textContent =
    formatNumber(averagePopulation);
});
