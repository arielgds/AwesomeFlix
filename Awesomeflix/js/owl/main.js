$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
/*function iniciapopup(popupID) {
    const pop = document.getElementById(popupID);
    pop.classList.add('mostrar');
}
const logo = document.querySelector('box1');
    logo.addEventListener('click', () => {
            iniciapopup('popup');
        })*/