//Elementos

    //Elementos Menu
    const menu = document.querySelector("#menu");
    const menuMobile = document.querySelector(".mn-mobile");

    //Elementos Fade
    const fades = document.querySelectorAll('.fade');




//Eventos

    //Eventos Menu
    menuMobile.addEventListener("click", toggleMenu);

    
    /*Obervador dos elementos Fades*/
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
    });
    
    fades.forEach(el => observer.observe(el));

//Funções

    //Funções Menu
    function toggleMenu(){
        menu.classList.toggle("showMobile");
        menuMobile.classList.toggle("active");
    }