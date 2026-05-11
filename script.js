const botao = document.querySelector(".btn-iniciar");

botao.addEventListener("click", function(){

    const nome = document.getElementById("nome").value;
    const escola = document.getElementById("escola").value;
    const idade = document.getElementById("idade").value;

    if(nome == "" || escola == "" || idade == ""){
        alert("Preencha todos os campos!");
    } else {
        window.location.href = "jogo.html";
    }

});