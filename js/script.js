submitButton = document.querySelector("#submitInput");
emailInput = document.querySelector("#emailInput");
emailField = document.querySelector("#email");
frontWall = document.querySelector("#frontWall");


submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (emailInput.value === "") {
        emailInput.classList.add("error");
    } else if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("error");
    } else {
        emailInput.classList.remove("error");
        frontWall.classList.add("completed");
        emailField.innerHTML = emailInput.value;
    }
});

emailInput.addEventListener("input", function () {
    emailInput.classList.remove("error");
});

function validateEmail(email) {
    var rx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return rx.test(email);
}