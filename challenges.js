// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 === true && boolean2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayStr) {
  return `${[arrayStr[arrayStr.length - 1]]}, ${[arrayStr[0]]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higher = Math.max(...arrayNumbers);
  let qtHigher = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === higher) {
      qtHigher += 1;
    }
  }
  return qtHigher;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat2 < cat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrNumber) {
  let arrayResult = [];

  for (let contador = 0; contador < arrNumber.length; contador += 1) {
    if (arrNumber[contador] % 3 === 0 && arrNumber[contador] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (arrNumber[contador] % 3 === 0) {
      arrayResult.push('fizz');
    } else if (arrNumber[contador] % 5 === 0) {
      arrayResult.push('buzz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

// Desafio 9
function encode(string) {
  for (let i = 0; i < string.length; i += 1) {
    string = string.replace('a', '1');
    string = string.replace('e', '2');
    string = string.replace('i', '3');
    string = string.replace('o', '4');
    string = string.replace('u', '5');
  }
  return string;
}

function decode(string) {
  for (let i = 0; i < string.length; i += 1) {
    string = string.replace('1', 'a');
    string = string.replace('2', 'e');
    string = string.replace('3', 'i');
    string = string.replace('4', 'o');
    string = string.replace('5', 'u');
  }
  return string;
}
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
