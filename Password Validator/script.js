let form = document.querySelector("form");
let passwordInput = document.querySelector("#password");
let messageList = document.querySelectorAll(".message li");

let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

passwordInput.addEventListener("input", () => {
    let passwordValue = passwordInput.value;
    
    let conditions = [
        /.{8,}/.test(passwordValue),
        /[A-Z]/.test(passwordValue),
        /[a-z]/.test(passwordValue),
        /[0-9]/.test(passwordValue),
        /[#?!@$%^&*-]/.test(passwordValue)
    ];
    
    conditions.forEach((condition, index) =>
    {
        if(condition) {
            messageList[index].style.color = "green";
        } else {
            messageList[index].style.color = "red";
        }
    });
});

form.addEventListener("submit", (e) => {
    let passwordValue = passwordInput.value;
    if (regexPassword.test(passwordValue)) {
        alert("Form is submitted");
    } else {
        alert("Please enter a valid password");
        e.preventDefault();
    }
});