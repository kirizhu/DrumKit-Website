document.querySelectorAll('.drum').forEach((button) => {
  button.addEventListener('click', function () {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});
document.addEventListener('keydown', function (e) {
  playSound(e.key);
  buttonAnimation(e.key);
});

function playSound(element) {
  let audioFile;
  switch (element) {
    case 'w':
      audioFile = new Audio('./sounds/tom-1.mp3');
      break;
    case 'a':
      audioFile = new Audio('./sounds/tom-2.mp3');
      break;
    case 's':
      audioFile = new Audio('./sounds/tom-3.mp3');
      break;
    case 'd':
      audioFile = new Audio('./sounds/tom-4.mp3');
      break;
    case 'j':
      audioFile = new Audio('./sounds/snare.mp3');
      break;
    case 'k':
      audioFile = new Audio('./sounds/kick-bass.mp3');
      break;
    case 'l':
      audioFile = new Audio('./sounds/crash.mp3');
      break;

    default:
      break;
  }
  audioFile.play();
}
function buttonAnimation(key) {
  let buttonPressed = document.querySelector('.' + key);
  buttonPressed.classList.add('pressed');
  setTimeout(() => {
    buttonPressed.classList.remove('pressed');
  }, 250);
}
