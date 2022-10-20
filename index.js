let arrayClientela = [];
let contador = 0;

document.addEventListener('click', function(e){

    const inputNome = document.querySelector('#nome');
    const inputIdade = document.querySelector('#idade');
    const inputSexo= document.querySelector('#sexo');
    const inputDia = document.querySelector('#dia');
    const inputHora = document.querySelector('#hora');
    const inputServico = document.querySelector('#servico');
    const spancontador = document.querySelector('#contador');

    const nome = inputNome.value;
    const idade = inputIdade.value;
    const sexo = inputSexo.value;
    const dia = inputDia.value;
    const hora = inputHora.value;
    const servico = inputServico.value;

    let el = e.target;

    if(el.classList.contains('btn')){

        let Cliente = {
            nome : nome,
            idade : idade, 
            sexo : sexo,
            dia : dia,
            hora : hora,
            servico : servico
        }
        contador++;
        spancontador.innerHTML = contador;
        arrayClientela.push(Cliente);
        console.log(arrayClientela);
        alert('Cliente: '+Cliente.nome+' Registrado com sucesso!');
    }
});




