console.log('Funguju!');
const itsYourTurn = 'circle';

const move = (event) => {
  event.target.classList.add('board__field--circle');
};

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}
