var nombre = document.getElementById('nombre')
var apellido = document.getElementById('apellido')
var correoElectronico = document.getElementById('correoElectronico')


function validarDatos(){
    nombre.addEventListener('input', validarNombre)
    apellido.addEventListener('input', validarApellido)
    correoElectronico.addEventListener('input', validarCorreoElectronico)
    validarNombre()
    validarApellido()
    validarCorreoElectronico()

}

function validarNombre() {
    if (nombre.value=='') {
        nombre.style.backgroundColor='#d17575'
        nombre.setCustomValidity('Ingresá nombre')
    } else {
        nombre.style.backgroundColor='#9ed199'
        nombre.setCustomValidity('')
    }
}
function validarApellido() {
    if (apellido.value=='') {
        apellido.style.backgroundColor='#d17575'
        apellido.setCustomValidity('Ingresá apellido')
    }else {
        apellido.style.backgroundColor='#9ed199'
        apellido.setCustomValidity('')
    }
}
function validarCorreoElectronico() {
    if (correoElectronico.value=='') {
        correoElectronico.style.backgroundColor='#d17575'
        correoElectronico.setCustomValidity('Formato de correo electrónico no es valido')
    }else {
        correoElectronico.style.backgroundColor='#9ed199'
        correoElectronico.setCustomValidity('')
    }
}


window.addEventListener('load', validarDatos)