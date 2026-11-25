
const statusButton = document.getElementById("statusButton");
const systemStatus = document.getElementById("systemStatus");

statusButton.addEventListener("click", function () {
    systemStatus.textContent =
        "Sistema funcionando corretamente! Projeto DevOps ativo.";

    systemStatus.style.color = "#4ade80";

    statusButton.textContent = "Sistema verificado";
});
