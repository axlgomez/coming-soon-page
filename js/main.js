const button = document.querySelector("#submit");
const emailAdress = document.querySelector("#email");
const errorMessage = document.querySelector(".error");
const input = document.querySelector(".main__form--email");

button.addEventListener("click", (e)=>{  

    const email = emailAdress.value.trim();

    const emailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
