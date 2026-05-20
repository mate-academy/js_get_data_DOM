const populations = document.querySelectorAll('.population');

let total = 0;

populations.forEach((span) => {
  const number = Number(span.textContent.replaceAll(',', ''));

  total += number;
});

const average = total / populations.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total;
averageElement.textContent = average;
