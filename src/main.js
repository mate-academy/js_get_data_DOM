document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map((el) => {
    const num = Number(el.textContent.replace(/,/g, ''));

    return isNaN(num) ? 0 : num;
  });

  const total = populations.reduce((acc, n) => acc + n, 0);
  const average = total / populations.length;

  const formatNumber = (num) => num.toLocaleString('en-US');

  document.querySelector('.total-population').textContent = formatNumber(total);

  document.querySelector('.average-population').textContent = formatNumber(
    Math.round(average),
  );
});
