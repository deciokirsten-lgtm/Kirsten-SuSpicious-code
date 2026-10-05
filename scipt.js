const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const container = document.querySelector('.container');

function moveNoButton(e) {
  const padding = 25;
  const maxX = container.clientWidth - btnNo.clientWidth - padding;
  const maxY = container.clientHeight - btnNo.clientHeight - padding;
  const minY = 130;

  let randomX, randomY;
  let distance = 0;

  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  do {
    randomX = Math.floor(Math.random() * (maxX - padding)) + padding;
    randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

    const deltaX = randomX + btnNo.clientWidth / 2 - mouseX;
    const deltaY = randomY + btnNo.clientHeight / 2 - mouseY;
    distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  } while (distance < 110);

  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
}

btnNo.addEventListener('mouseenter', moveNoButton);
btnNo.addEventListener('mousemove', moveNoButton);

// Click event for "Yes" -> Updates text & replaces button text
btnYes.addEventListener('click', () => {
  const question = document.querySelector('.question');
  
  // 1. Change main heading text
  question.innerHTML = 'I knew it! Bro 😎';
  
  // 2. Hide "No" button
  btnNo.style.display = 'none';
  
  // 3. Update "Yes" button text and center it
  btnYes.innerHTML = 'I hope you accept me ❤️';
  btnYes.style.left = '50%';
  btnYes.style.transform = 'translateX(-50%) scale(1.1)';
});