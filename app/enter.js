import { personalData } from "./register.js";

const enterBnt = document.querySelector('.content__imput__submit___enter')

if(enterBnt){
enterBnt.addEventListener('click', (event) => {
    event.preventDefault()


    const enterEmail = document.querySelector('#imput__email__enter')
    const enterPassword = document.querySelector('#imput__password__enter')

    let found = false;

    personalData.forEach(data => {
        if(enterEmail.value === data.Email && enterPassword.value === data.Password) {
           found = true;
        }
    })
    if(found){
       window.location.href = 'adoption.html';
    } else {
       alert('Email ou senha incorreta!');
    }
})
}