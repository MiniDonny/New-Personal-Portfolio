document.addEventListener('DOMContentLoaded', () => {
    animacionMenuIcon();
    animationScroll();
    header();
    footer();
    animacionGsap();
});

/*TOGGLE ICON NAVBAR*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let animacionMenuIcon = menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*SCROLL SECTIONS*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let animationScroll = window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            /*Active navbar links*/
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            /*active sections for animation on scroll*/
            sec.classList.add('show-animate');
        }

        /*if want to use animation that repeats on scrool use*/
        else{
            sec.classList.remove('show-animate');
        }
    });

    /*Sticky Header*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*Remove toggle icon and navbar when click navbar links(scroll)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    /*animation footer on scroll*/
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

/* Configura las animaciones con GSAP
gsap.registerPlugin(ScrollTrigger);

let animacionGsap = gsap.to('.show-animate', {
    ease: 'power4.inOut',
    scrollTrigger: {
        trigger: '.show-animate',
        start: 'top 5%', // Inicia la animación cuando el 10% del elemento es visible
        end: 'bottom 70%', // Termina la animación cuando el 80% del elemento no es visible
        scrub: true, // Hace que la animación sea suave al hacer scroll
        markers: false // Marcadores para depuración (puedes quitar esto en producción)
    }
});*/


/*A PARTIR DE ACA NO FUNCIONA*/

/* Configura las animaciones con GSAP*/

/*gsap.registerPlugin(ScrollTrigger);

let animacionGsap = () => gsap.to('.show-animate', {
    ease: 'power4.inOut',
    scrollTrigger: {
        trigger: '.show-animate',
        start: 'top 10%', // Inicia la animación cuando el 10% del elemento es visible
        end: 'bottom 80%', // Termina la animación cuando el 80% del elemento no es visible
        scrub: true, // Hace que la animación sea suave al hacer scroll
        markers: false // Marcadores para depuración (puedes quitar esto en producción)
    }
});*/