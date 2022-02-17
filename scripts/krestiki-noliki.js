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

let count = 0;

function addImageKrestik(field) {
  field.classList.add('krestiki-noliki__field_type_krestik');
  field.disabled = true;
  return count = count + 1;
}

function addImageNolik(field) {
  field.classList.add('krestiki-noliki__field_type_nolik');
  field.disabled = true;
  return count = count + 1;
}

function checkCount(item) {
  if (count % 2 == 0) {
    addImageKrestik(item);
  } else {
    addImageNolik(item);
  }
}

function setDisabledAllButton() {
  fields.forEach(item => item.disabled = true);
}

function checkVictoryKrestik() {
  if ( (fieldOne.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldTwo.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldThree.classList.contains('krestiki-noliki__field_type_krestik')) ||
      (fieldFour.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldFive.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldSix.classList.contains('krestiki-noliki__field_type_krestik')) ||
      (fieldSeven.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldEight.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldNine.classList.contains('krestiki-noliki__field_type_krestik')) ||
      (fieldOne.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldFour.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldSeven.classList.contains('krestiki-noliki__field_type_krestik')) ||
      (fieldTwo.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldFive.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldEight.classList.contains('krestiki-noliki__field_type_krestik')) ||
      (fieldThree.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldSix.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldNine.classList.contains('krestiki-noliki__field_type_krestik')) ||
      (fieldOne.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldFive.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldNine.classList.contains('krestiki-noliki__field_type_krestik')) ||
      (fieldThree.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldFive.classList.contains('krestiki-noliki__field_type_krestik') &&
      fieldSeven.classList.contains('krestiki-noliki__field_type_krestik'))
  ) {
    return true;
  }
}

function setVictoryKrestik() {
  if ( checkVictoryKrestik() ) {
    setDisabledAllButton();
    return true;
  }
}

function checkVictoryNolik() {
  if ( (fieldOne.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldTwo.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldThree.classList.contains('krestiki-noliki__field_type_nolik')) ||
      (fieldFour.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldFive.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldSix.classList.contains('krestiki-noliki__field_type_nolik')) ||
      (fieldSeven.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldEight.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldNine.classList.contains('krestiki-noliki__field_type_nolik')) ||
      (fieldOne.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldFour.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldSeven.classList.contains('krestiki-noliki__field_type_nolik')) ||
      (fieldTwo.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldFive.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldEight.classList.contains('krestiki-noliki__field_type_nolik')) ||
      (fieldThree.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldSix.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldNine.classList.contains('krestiki-noliki__field_type_nolik')) ||
      (fieldOne.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldFive.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldNine.classList.contains('krestiki-noliki__field_type_nolik')) ||
      (fieldThree.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldFive.classList.contains('krestiki-noliki__field_type_nolik') &&
      fieldSeven.classList.contains('krestiki-noliki__field_type_nolik'))
  ) {
    return true;
  }
}

function setVictoryNolik() {
  if ( checkVictoryNolik() ) {
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
    if (fieldOne.hasAttribute('disabled') &&
        fieldTwo.hasAttribute('disabled') &&
        fieldThree.hasAttribute('disabled') &&
        fieldFour.hasAttribute('disabled') &&
        fieldFive.hasAttribute('disabled') &&
        fieldSix.hasAttribute('disabled') &&
        fieldSeven.hasAttribute('disabled') &&
        fieldEight.hasAttribute('disabled') &&
        fieldNine.hasAttribute('disabled')
    ) {
      gameOverText.textContent = `${checkWhoVictory()}`;
    }
}

fields.forEach(item => item.addEventListener('click', () => {
  checkCount(item);
  setVictoryKrestik();
  setVictoryNolik();
  checkEnd();
} ));

function resetGame() {
  fields.forEach(item => {
    item.removeAttribute('disabled');
    item.classList.remove('krestiki-noliki__field_type_krestik', 'krestiki-noliki__field_type_nolik');
    gameOverText.textContent = '';
    return count = 0; //Если это убрать то новая игра поочередно будет начинаться либо с крестиков либо с ноликов
  });
}

newGame.addEventListener('click', resetGame);