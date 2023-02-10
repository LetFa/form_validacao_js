const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#passowrd");
const devSelect = document.querySelector("#dev");
const messageText = document.querySelector("#message");

form.addEventListener("submit", (event) => {
     event.preventDefault();

     if(nameInput.value === "") {
          alert("Por favor, preencha o seu nome");
          return;
     }

     if(emailInput.value === "" || !isEmailValidate(emailInput.value)){
        alert("Por favor, preencha o seu email");
        return;
     }

     if(!validatePassword(passwordInput.value, 8)){
      alert("A senha precisa ser no mínimo 8 dígitos");
      return;
     }

     form.submit();
});

//função que valida email

function isEmailValidate(email){
   const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
   )

   if(emailRegex.test(email)){
    return true;
   }
   return false;
}

//função que valida a senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
      return true;
    }
    return false;
}