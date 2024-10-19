const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; //declaração do vetor

frm.addEventListener("submit", (e) => { //função anônima
    e.preventDefault();                 //evita o envio do formulario

    const nome = frm.inPaciente.value;  //nome do paciente
    pacientes.push(nome);               //adiciona o nome no final do vetor

    let lista = "";                     //cocatena os pacientes em uma lista

    for(let i=0; i<pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]} \n`
    }
    respLista.innerText = lista;        //exibe a lista de pacientes
    frm.inPaciente.value="";            //limpa o conteudo do campo de form.
    frm.inPaciente.focus();             //posiciona o cursor
});

frm.btUrgencia.addEventListener("click", () => {    //adiciona um ouvinte ao evento "click"
    if(!frm.checkValidity()){                       //verifica se as validações estão ok
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inPaciente. focus();                    //posiciona o cursor no campo
        return;                                     //retorna ao form
    }
    const nome = frm.inPaciente.value;
    pacientes.unshift(nome)             //adiciona o paciente no inicio do vetor
    let lista  = "";

    pacientes.forEach((pacientes, i) => (lista += `${i + 1}. ${pacientes} \n`));
    respLista.innerText = lista;        //exibe a lista de pacientes
    frm.inPaciente.value = "";          //limpa o conteudo do formulário
    frm.inPaciente.focus();
});

frm.btAtender.addEventListener("click", () =>{
    // se o tamanho do vetor = 0
    if(pacientes.lenght == 0){
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();
        return;
    }
    const atender = pacientes.shift();   // remove do inicio da fila (e obtém nome)
    respNome.innerText = atender;        // exibe o nome do paciente em atendimento
    let lista = "";                      // string para concatenar pacientes
    pacientes.forEach((pacientes, i) => (lista += `${i + 1}. ${pacientes}\n`));
    respLista.innerText = lista;         // exibe a lista de pacientes na página
})