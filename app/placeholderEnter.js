//Enter
const inputEmailEnter = document.getElementById('imput__email__enter')
const inputPasswordEnter = document.getElementById('imput__password__enter')

function updatePlaceholders() {

   if(window.innerWidth < 768){

      inputEmailEnter.placeholder = "Insira seu email";
      inputPasswordEnter.placeholder = "Insira sua senha";

   } else {
      inputEmailEnter.placeholder = "Digite seu melhor email";
      inputPasswordEnter.placeholder = "Crie uma senha";
   }

}

window.addEventListener('DOMContentLoaded', updatePlaceholders)
window.addEventListener('resize', updatePlaceholders)