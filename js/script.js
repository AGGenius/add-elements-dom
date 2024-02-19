// Aquí tu código

const addElementBtn = document.getElementById('agregar');
const listParent = document.getElementById('lista');


addElementBtn.addEventListener('click', myFunction);


addElementBtn.addEventListener('mouseover', function() {
    addElementBtn.style.color = 'greenyellow'
    addElementBtn.style.borderColor = 'orangered'
});

addElementBtn.addEventListener('mouseout', function() {
    addElementBtn.style.color = 'orangered'
    addElementBtn.style.borderColor = 'greenyellow'
});

function myFunction() {
    const newElement = prompt('Introduce un nuevo elemento');
    
    if(newElement !== "" && newElement !== null) { // Si el string no esta vacio o no es null ejecuta el codigo.

        listParent.style.display = 'flex' // Puse que por defecto el display sea none.

        const redC = getRand(); // Un valor aleatorio para el color rojo. Extra.
        const greenC = getRand(); // Un valor aleatorio para el color verde. Extra.
        const blueC = getRand(); // Un valor aleatorio para el color azul. Extra.

        listParent.insertAdjacentHTML("beforeend", `<li>${newElement}</li>`); 

        const lastLi = listParent.querySelectorAll('li'); // Creamos una referencia para obtener todos los li del listado
        //en la siguiente linea de codigo se usa para obtener la ultima posicion, que es la que estamos añadiendo.

        lastLi[lastLi.length - 1].style.color = `rgb(${redC}, ${greenC}, ${blueC})`; // Cambiamos el color del elemento añadido
        //a la lista con unos valores aleatorios.
    }

    // Funcion para obtener los valores aletorios que se aplicaran al color.
    function getRand() {
        return Math.floor(Math.random() * 256); 
    }
}
