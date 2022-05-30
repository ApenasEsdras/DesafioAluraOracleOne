const inputText = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function bntEncriptar() {
    const textoEncriptada = encriptar(inputText.value)

    mensagem.value = textoEncriptada
    mensagem.style.backgroundImage = "none"
}

function bntDesencriptar() {
    const textoDesencriptado = desencriptar(inputText.value)
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]


    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']]

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada
}

function copiar() {
    let copiarMensagem = document.querySelector(".mensagem");
    copiarMensagem.select();
    copiarMensagem.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiarMensagem.value);

    alert("copiado");


}

