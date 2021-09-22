'use strict';

// write your code here
function calculatePopulationCountries() {
  const numbersPopulations = document.querySelectorAll('.population');
  const nodeTotal = document.querySelector('.total-population');
  const nodeAverage = document.querySelector('.average-population');

  const total = [...numbersPopulations].reduce((prev, curr) => {
    const num = +curr.innerHTML.replace(/\D/g, '');

    return prev + num;
  }, 0);
  const average = total / numbersPopulations.length;

  nodeTotal.innerHTML = total.toLocaleString().split(' ').join(',');
  nodeAverage.innerHTML = average.toLocaleString().split(' ').join(',');
}

calculatePopulationCountries();
