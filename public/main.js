// busca el id del boton y spinner(icon)
const btn = document.getElementById("btn");
const spinner = document.getElementById("spinner");

// cuando se haga click
btn.addEventListener('click',() =>{
    // desaparece el boton
    btn.style.display = 'none';
    // se muestra el icon js
    spinner.style.display = 'inline';
})
