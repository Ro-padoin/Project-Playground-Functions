// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let ordenated = techs.sort();
  let listReturn1 = [];
  for (let tech of ordenated) {
    listReturn1.push({
      tech,
      name,
    });
  }
  return listReturn1;
}

// Desafio 11
function generatePhoneNumber(phoneNumbers) {
  if (phoneNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const numbers = {};
  const errorMsg = 'não é possível gerar um número de telefone com esses valores';
  let formatPhoneNumber = '(xx) xxxxx-xxxx';
  for (let number of phoneNumbers) {
    if (number > 9 || number < 0) return errorMsg;
    if (numbers[number] === undefined) {
      numbers[number] = 0;
    }
    numbers[number] += 1;
    if (numbers[number] >= 3) return errorMsg;
    formatPhoneNumber = formatPhoneNumber.replace('x', number);
  }
  return formatPhoneNumber;
}

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let difAngle1 = Math.abs(lineA - lineB);
  let difAngle2 = Math.abs(lineB - lineC);
  let difAngle3 = Math.abs(lineC - lineA);

  return (
    lineA < lineB + lineC && lineA > difAngle2
    && lineB < lineA + lineC && lineB > difAngle3
    && lineC < lineB + lineA && lineC > difAngle1);
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
