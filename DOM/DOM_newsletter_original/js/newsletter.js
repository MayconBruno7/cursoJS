
const newsletterFeedback = document.querySelector("#newsletterFeedback");

function cadastrarEmail() {
    const txtEmail = document.getElementById("txtEmail");
    newsletterFeedback.textContent = "Email " + txtEmail.value + " cadastrado com sucesso";
}