//lista de teclas
const listaTecla = document.querySelectorAll('.tecla');

//contadores
let contador = 0;

//funçao de tocar
function toca(idTecla){
    document.querySelector(idTecla).play();
}

//quando pressionar a tecla reproduzir o som
for(contador = 0 ; contador<listaTecla.length; contador++){
    //variaveis condicional
    const tecla = listaTecla[contador];
    const instrumento = tecla.classList[1];
    const audio = `#som_${instrumento}`;

    //funcao da condicional
    tecla.onclick = function(){
        toca(audio);
    }
}
//fim ;)
