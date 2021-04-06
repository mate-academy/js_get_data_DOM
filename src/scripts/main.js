'use strict';

function parseTextToInt(text) {
  return parseInt(text.replaceAll(',', ''), 10);
}

function getDataFrom(selector) {
  const popElems = document.querySelectorAll(selector);

  return [...popElems].map(item => {
    return parseTextToInt(item.innerText);
  });
}

function getTotals(data) {
  return data.reduce((acc, item) => {
    return {
      qty: acc.qty + 1,
      total: acc.total + item,
    };
  }, {
    qty: 0,
    total: 0,
  });
}

function setNumberTo(selector, num) {
  document.querySelector(selector).innerText = num.toLocaleString('en-US');
}

const totals = getTotals(getDataFrom('.population'));

setNumberTo('.total-population', totals.total);
setNumberTo('.average-population', totals.total / totals.qty);
