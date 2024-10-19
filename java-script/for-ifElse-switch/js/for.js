const frm = document.querySelector("form");
const res = document.querySelector("pre");

let tabuada = "";

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value);

    for(let i=10; i>=1; i--){
        tabuada = tabuada + num + "X" + i + "=" + (num *i) + "\n";
    }
    res.innerText = tabuada;
})