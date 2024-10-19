const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const a =  document.getElementById("numero").value; //.value para buscar somente o valor e não o campo completo.
    resp.innerText = ((a % 2) == 0) ? document.write(`O número ${a} é PAR`) : document.write(`O número ${a} é ÍMPAR.`);

    e.preventDefault();
});