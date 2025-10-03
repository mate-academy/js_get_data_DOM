document.addEventListener('DOMContentLoaded', () => {
  const span = [...document.querySelectorAll('.population')];

  const parsedNumbers = span
    .map((el) => Number(el.textContent.replace(/,/g, '').trim()))
    .filter((num) => !isNaN(num));

  const sum = parsedNumbers.reduce((acc, num) => acc + num, 0);

  const totalPopulation = document.querySelector('.total-population');

  totalPopulation.textContent = sum.toLocaleString('en-US');

  const average =
    parsedNumbers.length === 0 ? 0 : Math.round(sum / parsedNumbers.length);

  const averagePopulation = document.querySelector('.average-population');

  averagePopulation.textContent = average.toLocaleString('en-US');
});
