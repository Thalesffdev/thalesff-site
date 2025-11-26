//Elementos

    //Elementos Menu
    const menu = document.querySelector("#menu");
    const menuMobile = document.querySelector(".mn-mobile");

    //Elementos Fade
    const fades = document.querySelectorAll('.fade');

    //Elementos Grid e Modal
    const grids = document.querySelectorAll(".grid-item");
    const modal = document.querySelector(".projetos-modal");

    let gridTitle = null;
    let gridText = null;
    let gridThumb = null;
    let gridLink = null;

    let modalTitle = null;
    let modalText = null;
    let modalLink = null
    let modalArea = modal.querySelector(".modal-area");
    
    let pressTimer = null;
    let pressedGrid = null;

//Eventos

    //Eventos Menu
    menuMobile.addEventListener("pointerdown", toggleMenu);
    
    //Eventos grid e Modal
    grids.forEach(grid => {
        grid.addEventListener("pointerdown", openModal);
        grid.addEventListener("pointerup", () => clearTimeout(pressTimer));
        grid.addEventListener("pointerleave", () => clearTimeout(pressTimer));
        grid.addEventListener("pointercancel", () => clearTimeout(pressTimer));
    });
    
    modal.addEventListener("pointerdown", closeModal);


//Funções

    //Funções Menu
    function toggleMenu(){
        menu.classList.toggle("showMobile");
        menuMobile.classList.toggle("active");
    }

    //Funções de modal 

    function openModal(e){
        console.log(e.pointerType);

        pressedGrid = e.currentTarget;

        if (e.pointerType === "touch") {
            pressTimer = setTimeout(() => {
                openModalContent(pressedGrid); 
            }, 1500);

            return;
        }

        openModalContent(pressedGrid);
    }

    function openModalContent(grid){
        gridTitle = grid.querySelector(".grid-item-thumb h3");
        gridText = grid.querySelector(".grid-item-thumb p");
        gridThumb = grid.querySelector(".grid-item img");
        gridLink = gridThumb.dataset.url;

        modalTitle = modal.querySelector(".modal-area .modal-infos h3");
        modalText = modal.querySelector(".modal-area .modal-infos p");
        modalLink = modal.querySelector(".modal-area .cta");

        modalArea.style.background = `url(${gridThumb.src})`;
        modalArea.style.backgroundSize = `cover`;
        modalArea.style.backgroundPosition = `top`;

        modalTitle.textContent = gridTitle.textContent;
        modalText.textContent = gridText.textContent;

        modalLink.href = gridLink;
        modal.classList.add("show");
    }
    function closeModal(e){
        e.target.classList.remove("show");

        gridTitle = null;
        gridText = null;
        gridThumb = null;
        gridLink = null;

        modalTitle = null;
        modalText =  null;
        modalLink = null
    }

    

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