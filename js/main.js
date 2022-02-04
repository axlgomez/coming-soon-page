const button = document.querySelector("#submit");
const emailAdress = document.querySelector("#email");
const errorMessage = document.querySelector(".error");
const input = document.querySelector(".main__form--email");

button.addEventListener("click", (e)=>{  

    const email = emailAdress.value.trim();

    const emailRegex = /^\S+@\S+\.\S+$/;

    if(email === '' || !emailRegex.test(email)){
        invalidEmail();
        e.preventDefault();
    }
});

invalidEmail = () => {
    errorMessage.classList.add('showMessage');
    input.classList.add('bordeRed');
    setTimeout(() => {
        errorMessage.classList.remove('showMessage');
        input.classList.remove('bordeRed');
    }, 3000);
};
