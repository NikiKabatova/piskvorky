console.log('Funguju!');

let itsYourTurn = 'circle';

const move = (event) => {
  //if (itsYourTurn === 'circle') {
  event.target.classList.add('board__field--circle');
  //} else {
  //  event.target.classList.add('board__field--cross');
  //}
  console.log(event);
};

const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', move);
}
