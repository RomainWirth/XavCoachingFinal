document.addEventListener("DOMContentLoaded", (event) => {
const toggleButton = document.querySelector('.toggle');
const navUl = document.querySelector('.nav-list-items');

console.log(toggleButton);

// condition si toggleButton not null ou undefined, alors exécuter le code ci-dessous
toggleButton.addEventListener('click', () => {
    if (navUl.style.display === 'block') {
        navUl.style.display = 'none';
    } else {
        navUl.style.display = 'block';
    }
    // Ajouter une classe pour masquer l'icône
    document.querySelector('.icon').classList.add('hidden');
});

// condition si navItems > 0, alors exécuter le code ci-dessous
// Ajouter un gestionnaire de clic aux éléments de la liste de navigation
const navItems = document.querySelectorAll('.nav-item a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navUl.style.display = 'none'; // Cacher la liste de navigation
        // Supprimer la classe pour afficher à nouveau l'icône
        document.querySelector('.icon').classList.remove('hidden');
    });
});

window.addEventListener('click', (e) => {
    if(!toggleButton.contains(e.target)) {
        navUl.style.display = 'none'; // Cacher la liste de navigation
        document.querySelector('.icon').classList.remove('hidden');
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 780) {
        navUl.removeAttribute('style');
    }
});

});