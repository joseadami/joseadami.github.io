function typeWriter(elemento){        
    const textotoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textotoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });

    }
const titulo = document.getElementById("titulo");
typeWriter(titulo);

