const header = document.querySelector('header');
const triggerSection = document.querySelector('#offres');

if (window.innerWidth > 992 ) {
    window.addEventListener('scroll', function() {
        const triggerSectionTop = triggerSection.getBoundingClientRect().top;
        if (triggerSectionTop <= 0) {
            // header.style.backgroundColor = 'rgba(72,72,72,0.5)';
            header.classList.add('bkg-color');
        } else {
            // header.style.backgroundColor = 'transparent';
            header.classList.remove('bkg-color');
        }
    })
} else {
    header.classList.add('bkg-color');
}
