const email = document.querySelector("#email");
const password = document.querySelector("#password");
const buttonSubmit = document.querySelector('button[type="submit"]');
const user = "globalsolution@fiap.com.br";
const correctPassword = "1234";

buttonSubmit.addEventListener("click", () => validate());

function validate() {
    if (email.value === user && password.value === correctPassword) {
        alert("Login efetuado com sucesso.");
        window.location.href = "/GS-LANDINGPAGE/";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");

    sidebar.style.display = "none";
}
