console.log('Working...')

const email = document.getElementById('email');
const message = document.getElementById('mensaje');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const btnSend = document.getElementById('btnSend');


function eventListener(){
    document.addEventListener('DOMContentLoaded', inicioApp)
    email.addEventListener('blur', validar);
    message.addEventListener('blur', validar)
    phone.addEventListener('blur', validar)
    name.addEventListener('blur', validar)

} eventListener();

function inicioApp(){
    btnSend.disabled = true;
    btnSend.style.background = '#C0C0C0'
}
function validar(){
    validarLongitud(this);
    if(email.value !== ''  && phone.value !== '' && name.value !== ''){
        btnSend.disabled = false;
        btnSend.style.background = 'rgb(56, 207, 94)';
    }
}
function validarLongitud(campo){
    console.log(campo.value.length)
    if(campo.value.length > 0){
        campo.style.borderBottom = '1px solid green';
    }else{
        campo.style.borderBottom = '1px solid red';
    }
}