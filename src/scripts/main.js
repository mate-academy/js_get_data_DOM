const populations = document.querySelectorAll('.population');

let total = 0;

populations.forEach((span) => {
  const number = Number(span.textContent.replaceAll(',', ''));

  total += number;
});

const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString();
