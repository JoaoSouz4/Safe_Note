let arrayClientela = [];
let contador = 0;

const btn = document.querySelector('#btn');
const spancontador = document.querySelector('#contador');


btn.addEventListener('click', function(){

    const data = new Date();
    let inputNome = document.querySelector('#nome');
    let inputSexo= document.querySelector('#sexo');
    let inputServico = document.querySelector('#servico');

    const nome = inputNome.value;
    const sexo = inputSexo.value;
    const servico = inputServico.value;

    if(nome == ''){
        alert('Preencha pelo menos o nome para continuar');
    }else{

        let Cliente = {
            nome : nome,
            sexo : sexo,
            hora : {
                dia: data.getDate(),
                mes: data.getMonth(),
                ano: data. getFullYear(),
                horas: data.getHours(),
                minuto: data.getMinutes(),
                dsemana : data.getDay()
            },
            servico : servico
        }
        contador++;
        spancontador.innerHTML = contador;
        arrayClientela.push(Cliente);
        console.log(arrayClientela);

        alert('Cliente: '+Cliente.nome+' Registrado com sucesso!');
        //saída de dados*

        let servicoSemana = encontrarMaiorServico(arrayClientela);
        let genero = encontrarMaiorGenero(arrayClientela);
        let registro = maiorRegistro(arrayClientela);
        
        mostrarStatus(servicoSemana, genero, registro);
    }
});

function mostrarStatus( servicoSemana, genero, registro){

    console.log('-----------------------');
    console.log('O serviço mais procurado durante a semana foi: '+servicoSemana[0]+", contendo: "+servicoSemana[1]+" novas solicitações deste procedimento");

    console.log("-----------------------");
    console.log(`${genero[0]}% dos clientes são do sexo masculino`);
    console.log(`${genero[1]}% dos clientes são do sexo feminino`);

    console.log("-----------------------");
    console.log(`O dia de maior registro de novos clientes foi: ${registro[0]}, contendo: ${registro[1]} novos registros`);

}


















