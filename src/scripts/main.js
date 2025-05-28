'use strict';

window.addEventListener('DOMContentLoaded', () => {
  averageAndTotalValue();
});

function averageAndTotalValue() {
  const population = document.querySelectorAll('.population');
  const value = Array.from(population).map((pop) => pop.innerText);
  const num = value.map((val) => Number(val.replaceAll(',', '')));
  const totalSum = num.reduce((acc, n) => acc + n, 0);
  const average = totalSum / num.length;

  const totalPopulation = document.getElementsByClassName('total-population');

  totalPopulation[0].innerText = totalSum.toLocaleString();

  const averagePopulation =
    document.getElementsByClassName('average-population');

  averagePopulation[0].innerText = average.toLocaleString();
}
