function ativaletra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=> {
        setTimeout(()=>{
            elemento.innerHTML += letra
        }, 90 * i);        
    });
}

const titulo = document.querySelector('.digitando');

ativaletra(titulo);