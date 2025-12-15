
//Register
const inputEmail = document.getElementById('imput__email')
const inputName = document.getElementById('imput__name')
const inputPassword = document.getElementById('imput__password')
const inputPasswordConfirm = document.getElementById('imput__password__confirm')




function updatePlaceholders() {
   if(window.innerWidth < 768){
      
      inputEmail.placeholder = "Escolha seu melhor email";
      inputName.placeholder = "Digite seu nome completo";
      inputPassword.placeholder = "Crie uma senha";
      inputPasswordConfirm.placeholder = "Repita a senha criada acima";

   } else {
      inputEmail.placeholder = "Digite seu melhor email";
      inputName.placeholder = "Digite seu nome completo";
      inputPassword.placeholder = "Crie uma senha";
      inputPasswordConfirm.placeholder = "Repita a senha criada acima";
   }
}

window.addEventListener('DOMContentLoaded', updatePlaceholders);
window.addEventListener('resize', updatePlaceholders);
