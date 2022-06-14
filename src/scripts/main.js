'use strict';
// Получаем елемент за класом

const getSpanClass = document.querySelectorAll('.population');
// з колекція => масив => сума

const totalAmount = [...getSpanClass]
  .map(item => item.innerText.replaceAll(',', ''))
  .map(el => Number(el)).reduce((acc, el) => acc + el);

// отрмуємо елем за класом
const newEl = document.querySelector('.total-population');

// присвоюю значення
newEl.innerText = totalAmount.toLocaleString('en-US');

// отрмую елем за тегом

const itemNew = document.querySelector('ol').children;
// зберігаю довжину на випадок якщо додадуться інші країни
const itemLen = itemNew.length;

// вираховую середнє значення загальна на кількість країн
const averageAm = totalAmount / itemLen;

// доступ за класом => змінити контенет
const aver = document.querySelector('.average-population');

aver.innerText = averageAm.toLocaleString('en-Us');
