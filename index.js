let itsYourTurn = 'circle';
const turn = document.querySelector('#turn');
const move = (event) => {
  if (itsYourTurn === 'circle') {
    event.target.classList.add('board__field--circle');
    itsYourTurn = 'cross';
    turn.src = 'images/cross.svg';
  } else {
    itsYourTurn = 'circle';
    event.target.classList.add('board__field--cross');
    turn.src = 'images/circle.svg';
  }
  console.log(event);
};

const buttons = document.querySelectorAll('.game__field button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}
