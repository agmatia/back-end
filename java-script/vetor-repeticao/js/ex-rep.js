const frm = document.querySelector("form");
const resp = document.querySelector("h3")

function limpar() {
    const teste = document.getElementById("");
    teste.focus();

    resp.innerText = "";
}

/*document.getElementById("reset").addEventListener("click", function() {
   document.getElementById("fruta").focus();
});*/

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.qtd.value);
    const text = frm.fruta.value;

    let resposta = "";

    for (let i = 1; i < num; i++) {
        resposta = resposta + text + "*";
    }
    resposta = resposta + text
    resp.innerText = resposta;

});