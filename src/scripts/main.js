'use strict';

class DecimalFormat {
  constructor(pattern) {
    // parse pattern. To work, need the length of the left and right
    // parts, and an array of index for all ','
    if (pattern.includes('.')) {
      this.rightLeng = pattern.slice(
        pattern.indexOf('.'), pattern.length).length - 1;
      this.coma = 1;
    } else {
      this.rightLeng = 0;
      this.coma = 0;
    }

    this.numbSign = [];

    if (pattern.includes(',')) {
      const arr = pattern.slice(
        0, pattern.length - this.rightLeng - this.coma).split('');

      for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] === ',') {
          this.numbSign.push(arr.length - i);
        }
      }
    }
    this.leftLeng = pattern.length - this.rightLeng - this.coma;
  }

  format(number) {
    const numFix = number.toFixed(this.rightLeng);
    const pointIndex = (numFix + '').indexOf('.');
    let rightPart;
    let leftPart;

    if (pointIndex === -1) {
      rightPart = Array(this.rightLeng).fill('0').join('');
      leftPart = numFix;
    } else {
      rightPart = (numFix + '').slice(pointIndex);
      leftPart = (numFix + '').slice(0, pointIndex);
    }

    // create array for added ','
    const numArr = leftPart.split('');

    //  calculating the number of needed zeros
    if (numArr.length < this.leftLeng - this.numbSign.length) {
      const addZero = this.leftLeng - this.numbSign.length - numArr.length;

      for (let i = 0; i < addZero; i++) {
        numArr.unshift('0');
      }
    }

    const resArr = numArr.reverse();

    for (const comaIndex of this.numbSign) {
      resArr.splice(comaIndex - 1, 0, ',');
    }

    return numArr.reverse().join('') + rightPart;
  }
}

const span = document.getElementsByClassName('population');

let average = 0;
let total = 0;

for (const item of span) {
  const text = item.innerText.replaceAll(',', '');

  total += +text;
}
average = total / span.length;

const averageClass = document.getElementsByClassName('average-population')[0];

const totalClass = document.getElementsByClassName('total-population')[0];

const numform = new DecimalFormat('0,000,000,000.0');

averageClass.innerText = numform.format(average);
totalClass.innerText = numform.format(total);
