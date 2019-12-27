alert('Hola');
const email = document.getElementById('email');
const message = document.getElementById('mensaje');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const btnSend = document.getElementById('btnSend');


function eventListener(){
    document.addEventListener('DOMContentLoaded', inicioApp)
} eventListener();

function inicioApp(){
    btnSend.disabled = true;
}
