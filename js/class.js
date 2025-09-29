document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 96; // hauteur du header fixe
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});


// Sélection des éléments
const sidebar = document.getElementById('mobile-sidebar');
const openBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-sidebar');

// Ouvrir sidebar
openBtn.addEventListener('click', () => {
  sidebar.classList.remove('-translate-x-full');
});

// Fermer sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
});

// Dropdowns mobiles
document.querySelectorAll('[data-toggle]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-toggle');
    const menu = document.getElementById(id);
    menu.classList.toggle('max-h-0');
    menu.classList.toggle('max-h-40'); // ajuster selon contenu
    btn.querySelector('i').classList.toggle('rotate-180');
  });
});
