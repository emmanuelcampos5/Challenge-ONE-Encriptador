
function textReturn(texto) {
    document.querySelector('#output').value = texto;
    return;
}

function ocultarTextArea(bool) {
    let divTextArea = document.getElementById('divTextArea');
    let divImg = document.getElementById('divImg');

    if(bool){
        divTextArea.style.display = "none";
        divImg.style.display = "block";
    }else{
        divTextArea.style.display = "block";
        divImg.style.display = "none";
    }
}

function verificarTexto(texto) {
    if (/^[a-z\s]+$/.test(texto)) {
        ocultarTextArea(false);
        return true;
    } else if (/^\s*$/.test(texto)) {
        ocultarTextArea(true);
        return false;
    } else {
        ocultarTextArea(false);
        textReturn('El texto debe contener solo letras minúsculas y espacios.');
        return false;
    }
}

function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById('output').value)
}

function encriptar(texto) {
    return texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}

function convertirTexto(accion) {
    let texto = document.querySelector('#input').value;

    if (verificarTexto(texto)) {
        if (accion == 'encriptar') {
            textReturn(encriptar(texto));
        } else {
            if (accion == 'desencriptar') {
                textReturn(desencriptar(texto));
            }
        }
    }
}
