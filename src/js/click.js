const $score = document.querySelector('.score');
const $circle = document.querySelector('.circle-img');
const $span = document.querySelector('.text');

function start() {
  setScore(getScore());
  setImage();
}

function setScore(score) {
  localStorage.setItem('score', score);
  $score.textContent = score;
}

function getScore() {
  return Number(localStorage.getItem('score') ?? 0);
}

function addOne() {
  setScore(getScore() + 1);
  setImage();
}

function setImage() {
  if (getScore() >= 150) {
    $circle.setAttribute('src', './img/koleso_lvl2.png');
  }
  if (getScore() >= 200) {
    $span.textContent = 'Гарик жмых))))';
  }
}

let til = 0;
$circle.addEventListener('click', evt => {
  const rect = $circle.getBoundingClientRect();
  console.log(rect);
  //   const offfsetX = evt.clientX - rect.left - rect.width / 2;
  //   const offfsetY = evt.clientY - rect.top - rect.height / 2;
  //   const DEG = 50;

  //   const tiltX = (offfsetY / rect.height) * DEG;
  //   const tiltY = (offfsetX / rect.width) * -DEG;

  //   $circle.style.setProperty('--tiltX', `${tiltX}deg`);
  //   $circle.style.setProperty('--tiltY', `${tiltY}deg`);

  //   setTimeout(() => {
  //     $circle.style.setProperty('--tiltX', `0deg`);
  //     $circle.style.setProperty('--tiltY', `0deg`);
  //   }, 300);
  $circle.style.setProperty('--til', `${til}deg`);
  til += 10;

  const plusOne = document.createElement('div');
  plusOne.classList.add('plus-one');
  plusOne.textContent = '+1';
  plusOne.style.left = `${evt.clientX - rect.left}px`;
  plusOne.style.top = `${evt.clientY - rect.top}px`;

  $circle.parentElement.appendChild(plusOne);

  setTimeout(() => {
    plusOne.remove();
  }, 1500);

  addOne();
});

start();
