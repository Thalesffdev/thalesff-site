//Elementos

    //Elementos Menu
    const menu = document.querySelector("#menu");
    const menuMobile = document.querySelector(".mn-mobile");

//Eventos

    //Eventos Menu
    menuMobile.addEventListener("click", toggleMenu);

//Funções

    //Funções Menu
    function toggleMenu(){
        menu.classList.toggle("show");
        menuMobile.classList.toggle("active");
    }