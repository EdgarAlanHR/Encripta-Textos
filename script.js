function encriptar() {
    let texto = document.getElementById('textoEntrada').value;
    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];

        if (letra === 'e') {
            textoEncriptado += 'enter';
        } else if (letra === 'i') {
            textoEncriptado += 'imes';
        } else if (letra === 'a') {
            textoEncriptado += 'ai';
        } else if (letra === 'o') {
            textoEncriptado += 'ober';
        } else if (letra === 'u') {
            textoEncriptado += 'ufat';
        } else {
            textoEncriptado += letra;
        }
    }

    if (textoEncriptado.trim().length === 0) {
        mostrarSinResultado();
    } else {
        mostrarResultado(textoEncriptado);
    }
}

function desencriptar() {
    let texto = document.getElementById("textoEntrada").value;
    let textoDesencriptado = '';
    let i = 0;

    while (i < texto.length) {
        if (texto.substr(i, 5) === 'enter') {
            textoDesencriptado += 'e';
            i += 5;
        } else if (texto.substr(i, 4) === 'imes') {
            textoDesencriptado += 'i';
            i += 4;
        } else if (texto.substr(i, 2) === 'ai') {
            textoDesencriptado += 'a';
            i += 2;
        } else if (texto.substr(i, 4) === 'ober') {
            textoDesencriptado += 'o';
            i += 4;
        } else if (texto.substr(i, 4) === 'ufat') {
            textoDesencriptado += 'u';
            i += 4;
        } else {
            textoDesencriptado += texto[i];
            i++;
        }
    }

    if (textoDesencriptado.trim().length === 0) {
        mostrarSinResultado();
    } else {
        mostrarResultado(textoDesencriptado);
    }
}

function copiar() {
    let texto = document.getElementById("textoSalida");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function validarEntrada() {
    let texto = document.getElementById('textoEntrada').value;
    let mensaje = document.querySelector('.mensaje');
    let iconoAdvertencia = document.querySelector('.advertencia-icono');
    
    let regex = /^[a-z\s]+$/;
    
    if (!regex.test(texto)) {
        mensaje.style.color = 'red';
        iconoAdvertencia.style.color = 'red';
    } else {
        mensaje.style.color = 'black';
        iconoAdvertencia.style.color = 'black';
    }
}

function mostrarResultado(texto) {
    document.getElementById("textoSalida").value = texto;
    document.querySelector('.sin-resultado').style.display = 'none';
    document.getElementById("textoSalida").style.display = 'block';
    document.querySelector('.copiar').style.display = 'block';
}

function mostrarSinResultado() {
    document.querySelector('.sin-resultado').style.display = 'block';
    document.getElementById("textoSalida").style.display = 'none';
    document.querySelector('.copiar').style.display = 'none';
}