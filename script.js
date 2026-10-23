const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1
});

observer.observe(document.querySelector('#portfolioSec2'));

let lastY = 0;

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;

    if (currentY <= 0) {
   document.body.dataset.scroll = 'up';
  } 
  else if (currentY > lastY) {
    document.body.dataset.scroll = 'down';
  } 
  else if (currentY < lastY) {
    document.body.dataset.scroll = 'up';
  }

  lastY = currentY;
}, { passive: true });


function updateClock() {
      const now = new Date();

     
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12 || 12; 
      const formattedHours = String(hours).padStart(2, '0');

      document.getElementById('time').textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);
    }

  
    updateClock();
    setInterval(updateClock, 1000);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    root: null,
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px',
  }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

window.addEventListener('DOMContentLoaded', () => {
  const curtain = document.getElementById('curtain');
  if (!curtain) return;

setTimeout(() => {
    curtain.classList.add('slide-away');
  }, 3000);

  curtain.addEventListener('transitionend', () => {
    curtain.remove();
  }, { once: true });
});
