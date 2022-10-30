let arrayClientela = [];
let contador = 0;
const data = new Date();

const btn = document.querySelector('#btn');
const spancontador = document.querySelector('#contador');


btn.addEventListener('click', function(){

    let inputNome = document.querySelector('#nome');
    let inputSexo= document.querySelector('#sexo');
    let inputServico = document.querySelector('#servico');

    const nome = inputNome.value;
    const sexo = inputSexo.value;
    const servico = inputServico.value;

    if(nome == ''){
        alert('Preencha o nome do cliente para contiunar o cadastro');
        return;
    } 

        let cliente = new Cliente(nome, sexo, servico, data.getDate(), data.getMonth()+1,
         data.getFullYear(), data.getHours(), data.getMinutes(), data.getDay());

        arrayClientela.push(cliente);
        console.log(arrayClientela);

        contador++;
        spancontador.innerHTML = contador;
        let estatísticasGenero = encontrarMaiorGenero(arrayClientela);
        let estatísticasSemana = maiorRegistro(arrayClientela);
        let estatísticasServicos = encontrarMaiorServico(arrayClientela);
        mostrarStatus(estatísticasGenero, estatísticasSemana, estatísticasServicos);
});

