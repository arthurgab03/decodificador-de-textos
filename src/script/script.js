// TEXTAREAS 
var secretText = document.querySelector('.secret-message');
var reveal = document.querySelector('.message');

// BOTÕES
var codifica = document.querySelector('.codificar');
var decodifica = document.querySelector('.decodificar');
var copiar = document.querySelector('.copiar')




codifica.onclick = btnCodificar;
decodifica.onclick = btnDecodificar;
copiar.addEventListener('click', function copiaTexto (){
    reveal.select();
    document.execCommand("copy");
});




// FUNÇÕES

function btnCodificar() {
    const textoEncriptado = codificar(secretText.value);
    reveal.value = textoEncriptado;
    secretText.value = "";
}


function codificar(stringEncriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}


function btnDecodificar() {
    const textoDecodificado = decodificar(secretText.value);
    reveal.value = textoDecodificado;
    secretText.value = "";
}


function decodificar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}













