let itsYourTurn = 'circle';
let currentPlayer = document.getElementById('currentPlayer');

const move = (event) => {
  if (itsYourTurn === 'circle') {
    event.target.classList.add('board__field--circle');
    itsYourTurn = 'cross';
  } else {
    itsYourTurn = 'circle';
    event.target.classList.add('board__field--cross');
  }
  console.log(event);
};

const buttons = document.querySelectorAll('.game__field button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}
