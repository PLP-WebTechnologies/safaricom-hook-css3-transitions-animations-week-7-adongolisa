let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');

    
};
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content, .about', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services, .portfolio, .contact', { origin: 'top' });
 ScrollReveal().reveal('.home-content h1, .about-col-1 img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-col-2', { origin: 'right' });


 const typed = new Typed(' .multiple-text',{
    strings:['Frontend Developer', 'UI/UX Designer ', 'Social Media Manager'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    sections.forEach(section => {
        let top =window.scrollY;
        let offset = section.offsetTop - 150;
        let height =section.offsetHeight;
        let id = section.getAttribute('id');
         

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            
            document.querySelector('header nav a[href"=' + id + ']').classList.add('active');
        });
    };
});
};
        
    
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.class.remove('fa-x');
        navbar.classList.remove('active');


    
    
