

export const personalData = JSON.parse(localStorage.getItem('personalData')) || []

//Submit
const registerBnt = document.getElementById('content__form__tag')

if(registerBnt){
registerBnt.addEventListener('submit', (event) =>{
//Input
const registerEmail = document.querySelector('#imput__email')
const registerName = document.querySelector('#imput__name')
const registerPassword = document.querySelector('#imput__password')
const registerPasswordConfirm = document.querySelector('#imput__password__confirm')

    event.preventDefault()

   if(registerPassword.value === registerPasswordConfirm.value && registerPassword.value.length >= 8 && registerPasswordConfirm.value.length >= 8 && registerEmail.value && registerName.value) {
       const data = {
       Email: registerEmail.value,
       Name: registerName.value,
       Password: registerPassword.value,
       PasswordConfirm: registerPasswordConfirm.value
    }
    personalData.push(data)
    localStorage.setItem('personalData', JSON.stringify(personalData))

    window.location.href = 'enter.html'
   } else {
      alert('Senhas incoretas, ou senha com menos de 8 caracterís, ou formulario incompleto.')
   }

})
}
