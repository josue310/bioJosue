const conteneur = document.getElementById('conteneur');
const texte = document.querySelector('.texte');

let indexTexte = 0; // Index du texte actuel
let indexLettre = 0; // Index de la lettre en cours
const textes = ['Josué', 'Noël', 'Yao']; // Tableau de textes

function defilerTexteLettreParLettre() {
  const texteActuel = textes[indexTexte];
  texte.textContent = texteActuel.substring(0, indexLettre + 1); // Affichage des lettres jusqu'à l'index actuel

  if (indexLettre === texteActuel.length) {
    indexLettre = 0; // Réinitialisation de l'index de la lettre
    indexTexte++; // Incrémentation de l'index du texte

    if (indexTexte === textes.length) {
      indexTexte = 0; // Réinitialisation de l'index du texte si la fin du tableau est atteinte
    }
  } else {
    indexLettre++; // Incrémentation de l'index de la lettre
  }

  setTimeout(defilerTexteLettreParLettre, 400); // Défilement lettre par lettre (50 millisecondes par lettre)
}

defilerTexteLettreParLettre(); // Lancement du défilement
