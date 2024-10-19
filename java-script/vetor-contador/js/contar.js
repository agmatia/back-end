
const frm = document.getElementById("contar");
const resp = document.getElementById("contador");

let i = 0;
i = localStorage.getItem("contador") ? localStorage.getItem("contador") : i++;

    frm.addEventListener("click", () => {
        i++;
        resp.innerText ="Contador: "+ i;
        localStorage.setItem("contador", i);
    })
    