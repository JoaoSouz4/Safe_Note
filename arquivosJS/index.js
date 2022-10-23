let arrayClientela = [];
let contador = 0;

const btn = document.querySelector('#btn');
const spancontador = document.querySelector('#contador');


btn.addEventListener('click', function(){

    const inputNome = document.querySelector('#nome');
    const inputIdade = document.querySelector('#idade');
    const inputSexo= document.querySelector('#sexo');
    const inputDia = document.querySelector('#dia');
    const inputHora = document.querySelector('#hora');
    const inputServico = document.querySelector('#servico');

    const nome = inputNome.value;
    const idade = inputIdade.value;
    const sexo = inputSexo.value;
    const dia = inputDia.value;
    const hora = inputHora.value;
    const servico = inputServico.value;

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

        //alert('Cliente: '+Cliente.nome+' Registrado com sucesso!');

        //saída de dados*

        let registro = encontrarMaiorDia(arrayClientela);
        let soma = somarArray(registro[2]);
        let servicoSemana = encontrarMaiorServico(arrayClientela);
        let genero = encontrarMaiorGenero(arrayClientela);
        
        mostrarStatus(registro, soma, servicoSemana, genero);

});

function mostrarStatus(registro, soma, servicoSemana, genero){
    console.log('Total clientes registrados: '+soma);

    console.log('-----------------------');
    console.log('O dia de maior registro foi: '+registro[0]+", "+registro[1]+" novos clientes foram adicionados neste dia");

    console.log('-----------------------');
    console.log('O serviço mais procurado durante a semana foi: '+servicoSemana[0]+", contendo: "+servicoSemana[1]+" novas solicitações deste procedimento");

    console.log("-----------------------");
    console.log(`${genero[0]}% dos clientes são do sexo masculino`);
    console.log(`${genero[1]}% dos clientes são do sexo feminino`);

}














