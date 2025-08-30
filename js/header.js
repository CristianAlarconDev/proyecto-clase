
const btnHamburguesa = document.querySelector("#btn-hamburguesa")
const navHamburguesa = document.querySelector("#nav-hamburguesa");


/*revisar esta funcion, hacerla mas estricta*/

function navNoVisible(navegacion){
    return navegacion.style.display==="none";
}

function mostrarNav(navegacion){
    if (navNoVisible(navegacion)) {
        navegacion.style.display="flex";
    } else {
        navegacion.style.display="none";
    }
}

btnHamburguesa.addEventListener("click", 
    ()=> mostrarNav(navHamburguesa));