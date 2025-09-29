// Hamburger menu avec slide
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  if (menu.classList.contains("max-h-0")) {
    menu.classList.remove("max-h-0");
    menu.classList.add("max-h-screen"); // tu peux ajuster la hauteur max
  } else {
    menu.classList.add("max-h-0");
    menu.classList.remove("max-h-screen");
  }
});

// Fonction générique pour toggle avec animation
function toggleSubmenu(buttonId, menuId) {
  const btn = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);

  btn.addEventListener("click", () => {
    if (menu.classList.contains("max-h-0")) {
      menu.classList.remove("max-h-0");
      menu.classList.add("max-h-96");
    } else {
      menu.classList.add("max-h-0");
      menu.classList.remove("max-h-96");
    }
  });
}

// Activer pour Compétences et Projets
toggleSubmenu("mobile-competences-btn", "mobile-competences-menu");
toggleSubmenu("mobile-projets-btn", "mobile-projets-menu");
