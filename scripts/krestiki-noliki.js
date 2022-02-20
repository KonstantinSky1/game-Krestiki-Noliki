const fields = document.querySelectorAll('.krestiki-noliki__field');

const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');
const fieldThree = document.querySelector('#field-three');
const fieldFour = document.querySelector('#field-four');
const fieldFive = document.querySelector('#field-five');
const fieldSix = document.querySelector('#field-six');
const fieldSeven = document.querySelector('#field-seven');
const fieldEight = document.querySelector('#field-eight');
const fieldNine = document.querySelector('#field-nine');

const gameOverText = document.querySelector('.game-over__text');
const newGame = document.querySelector('.new-game');

const fieldKrestikiClass = 'krestiki-noliki__field_type_krestik';
const fieldNolikiClass = 'krestiki-noliki__field_type_nolik';

const numberOfFields = 9;

const krestikiNolikiLine1 = document.querySelector('.krestiki-noliki__line1');
const krestikiNolikiLine2 = document.querySelector('.krestiki-noliki__line2');
const krestikiNolikiLine3 = document.querySelector('.krestiki-noliki__line3');
const krestikiNolikiLine4 = document.querySelector('.krestiki-noliki__line4');
const krestikiNolikiLine5 = document.querySelector('.krestiki-noliki__line5');
const krestikiNolikiLine6 = document.querySelector('.krestiki-noliki__line6');
const krestikiNolikiLine7 = document.querySelector('.krestiki-noliki__line7');
const krestikiNolikiLine8 = document.querySelector('.krestiki-noliki__line8');

const allLines = document.querySelectorAll('.line');

function setDisabledAllButton() {
  fields.forEach(item => item.disabled = true);
}

function checkVictoryKrestikOrNolik(fieldClass) {
  let condition1;
  let condition2;
  let condition3;
  let condition4;
  let condition5;
  let condition6;
  let condition7;
  let condition8;

  if ( fieldOne.classList.contains(fieldClass) && fieldTwo.classList.contains(fieldClass) && fieldThree.classList.contains(fieldClass) ) {
    krestikiNolikiLine1.classList.add('line-gorizont');
    krestikiNolikiLine1.style.visibility = 'visible';
    condition1 = true;
  }

  if ( fieldFour.classList.contains(fieldClass) && fieldFive.classList.contains(fieldClass) && fieldSix.classList.contains(fieldClass) ) {
    krestikiNolikiLine2.classList.add('line-gorizont');
    krestikiNolikiLine2.style.visibility = 'visible';
    condition2 = true;
  }

  if ( fieldSeven.classList.contains(fieldClass) && fieldEight.classList.contains(fieldClass) && fieldNine.classList.contains(fieldClass)) {
    krestikiNolikiLine3.classList.add('line-gorizont');
    krestikiNolikiLine3.style.visibility = 'visible';
    condition3 = true;
  }

  if ( fieldOne.classList.contains(fieldClass) && fieldFour.classList.contains(fieldClass) && fieldSeven.classList.contains(fieldClass)) {
    krestikiNolikiLine4.classList.add('line-vertical');
    krestikiNolikiLine4.style.visibility = 'visible';
    condition4 = true;
  }

  if ( fieldTwo.classList.contains(fieldClass) && fieldFive.classList.contains(fieldClass) && fieldEight.classList.contains(fieldClass) ) {
    krestikiNolikiLine5.classList.add('line-vertical');
    krestikiNolikiLine5.style.visibility = 'visible';
    condition5 = true;
  }

  if ( fieldThree.classList.contains(fieldClass) && fieldSix.classList.contains(fieldClass) && fieldNine.classList.contains(fieldClass) ) {
    krestikiNolikiLine6.classList.add('line-vertical');
    krestikiNolikiLine6.style.visibility = 'visible';
    condition6 = true;
  }

  if ( fieldOne.classList.contains(fieldClass) && fieldFive.classList.contains(fieldClass) && fieldNine.classList.contains(fieldClass) ) {
    krestikiNolikiLine7.classList.add('line-diagonal1');
    krestikiNolikiLine7.style.visibility = 'visible';
    condition7 = true;
  }

  if ( fieldThree.classList.contains(fieldClass) && fieldFive.classList.contains(fieldClass) && fieldSeven.classList.contains(fieldClass) ) {
    krestikiNolikiLine8.classList.add('line-diagonal2');
    krestikiNolikiLine8.style.visibility = 'visible';
    condition8 = true;
  }

  if ( condition1 || condition2 || condition3 || condition4 || condition5 || condition6 || condition7 || condition8 ) {
    return true;
  }
}

function setVictoryKrestik() {
  if ( checkVictoryKrestikOrNolik(fieldKrestikiClass) ) {
    setDisabledAllButton();
    return true;
  }
}

function setVictoryNolik() {
  if ( checkVictoryKrestikOrNolik(fieldNolikiClass) ) {
    setDisabledAllButton();
    return true;
  }
}

function checkWhoVictory() {
  switch(true) {
    case setVictoryKrestik() : return 'Победили Крестики!';
    case setVictoryNolik() : return 'Победили Нолики!';
    default: return 'Ничья!';
  }
}

function checkEnd() {
  const arr = [];

  fields.forEach(field => {
    if (field.hasAttribute('disabled')) {
      arr.push(field);
    }
  });

  if (arr.length === numberOfFields) {
    gameOverText.textContent = `${checkWhoVictory()}`;
  }
}

function addImage(field) {
  field.classList.add('krestiki-noliki__field_type_krestik');
  field.disabled = true;

  let randomField = findFieldWitoutAttrDisabled();
  if (randomField && !checkVictoryKrestikOrNolik('krestiki-noliki__field_type_krestik')) {
    randomField.classList.add('krestiki-noliki__field_type_nolik');
    randomField.disabled = true;
  }
}

function findFieldWitoutAttrDisabled() {
  const findAttr = [];
  fields.forEach(item => {
    if (!item.hasAttribute('disabled')) {
      findAttr.push(item);
    }
  });

  let x;
  return x = findAttr[Math.floor(Math.random()*findAttr.length)];
}

fields.forEach(item => item.addEventListener('click', () => {
  addImage(item);
  setVictoryKrestik();
  setVictoryNolik();
  checkEnd();
} ));

function resetGame() {
  fields.forEach(item => {
    item.removeAttribute('disabled');
    item.classList.remove('krestiki-noliki__field_type_krestik', 'krestiki-noliki__field_type_nolik');
    gameOverText.textContent = '';
  });

  allLines.forEach(item => {
    item.classList.remove('line-gorizont', 'line-vertical', 'line-diagonal1', 'line-diagonal2');
    item.style.visibility = 'hidden';
  });
}

newGame.addEventListener('click', resetGame);