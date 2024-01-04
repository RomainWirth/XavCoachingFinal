const toggleButton = document.querySelector('.toggle');
const navUl = document.querySelector('.nav-list-items');

const toggleMenu = () => {
    if (window.innerWidth <= 992) {
        if (navUl.style.display === 'block') {
            navUl.style.display = 'none';
        } else {
            navUl.style.display = 'block';
        }
        // Ajouter une classe pour masquer l'icône
        document.querySelector('.icon').classList.add('hidden');
    }
}

toggleButton.addEventListener('click', toggleMenu);

// Ajouter un gestionnaire de clic aux éléments de la liste de navigation
const navItems = document.querySelectorAll('.nav-item a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            navUl.style.display = 'none'; // Cacher la liste de navigation
            // Supprimer la classe pour afficher à nouveau l'icône
            document.querySelector('icon').classList.remove('hidden');
        }
    });
});

window.addEventListener('click', (e) => {
    if(window.innerWidth <= 992 && !toggleButton.contains(e.target)) {
        navUl.style.display = 'none'; // Cacher la liste de navigation
        document.querySelector('.icon').classList.remove('hidden');
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        navUl.removeAttribute('style');
    }
});
