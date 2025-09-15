// hamburger menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});


// project filter
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  // Fonction pour afficher le bon onglet
  function showTab(tabName) {
      contents.forEach(c => {
          if (tabName === "tous") {
              // Afficher toutes les sections si "Tous" est sélectionné
              c.classList.remove("hidden");
          } else if (c.id === tabName) {
              c.classList.remove("hidden");
          } else {
              c.classList.add("hidden");
          }
      });

      // Mettre à jour la couleur des onglets
      tabs.forEach(t => {
        if (t.dataset.tab === tabName) {
            t.style.color = "var(--text-white)";
            t.style.backgroundColor = "var(--bg-red)";
        } else {
            t.style.color = "black";
            t.style.backgroundColor = "#E5E5E5"; 
        }
    });
    
  }

  // Activation au clic
  tabs.forEach(tab => {
      tab.addEventListener("click", () => {
          showTab(tab.dataset.tab);
      });
  });

  // Affichage par défaut : Formation
  showTab("formation");
});
