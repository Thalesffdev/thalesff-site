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

    /*Elementos Skill slide*/
    const track = document.querySelector(".skills-slider-track");
    const slides = Array.from(track.children);

//Eventos

    //Eventos Menu
    menuMobile.addEventListener("pointerdown", toggleMenu);
    
    grids.forEach((grid) => {
        const gridButtons = grid.querySelectorAll("a");

        gridButtons.forEach((button) => {
            button.addEventListener("pointerdown", openModal);
        });
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
            }, 350);

            return;
        }

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

        /*Tecnologias*/
        const techList = gridThumb.dataset.tech.split(",").map(t => t.trim());
        const techGrid = modal.querySelector(".modal-tec-grid");

        techGrid.innerHTML = "";

        techList.forEach(tech => {
            const item = document.createElement("div");
            item.classList.add("modal-grid-tec-item");
            item.innerHTML = tech;
            techGrid.appendChild(item);
        });

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
