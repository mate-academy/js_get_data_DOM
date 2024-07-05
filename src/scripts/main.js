const spanEl = document.querySelectorAll('.population');
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

const num = [];

spanEl.forEach((span) => {
  const textContent = span.innerHTML;

  const numericContent = textContent.replace(/[^\d.-]/g, '');

  const number = Number(numericContent);

  num.push(number);
});

const total = num.reduce((acc, i) => acc + i)

let average = total / num.length;

totalEl.innerHTML = total.toLocaleString('en-US');
averageEl.innerHTML = average.toLocaleString('en-US');

