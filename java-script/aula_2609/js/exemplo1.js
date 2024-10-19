const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value;
    const idade =  document.getElementById("inIdade").value; //.value para buscar somente o valor e não o campo completo.
    const cidade =  frm.inCidade.value;
    const documento = document.getElementById("cpf").value

    resp.innerHTML = `Olá <i>${nome}</i>, você tem ${idade} anos e mora em ${cidade}. Seu CPF é: <u>${documento}</u>.`;

    e.preventDefault();
});