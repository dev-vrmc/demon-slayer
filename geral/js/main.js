/*=============== Navegação clicavel ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*=============== MENU HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}


// === CONTAGEM REGRESSIVA ===
const countdownEl = document.getElementById('countdown');
const targetDate = new Date("2025-09-11T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "🎉 Chegou o grande dia!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
