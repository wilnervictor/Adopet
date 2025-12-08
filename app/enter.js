import { personalData } from "./register.js";

const formSubmit = document.getElementById('content__form__tag')


formSubmit.addEventListener('submit', (event) => {
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
