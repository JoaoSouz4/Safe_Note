let arrayClientela = [];
let contador = 0;

const btn = document.querySelector('#btn');
const spancontador = document.querySelector('#contador');


btn.addEventListener('click', function(){

    const data = new Date();

    const inputNome = document.querySelector('#nome');
    const inputSexo= document.querySelector('#sexo');
    const inputDia = document.querySelector('#dia');
    const inputServico = document.querySelector('#servico');

    const nome = inputNome.value;
    const sexo = inputSexo.value;
    const dia = inputDia.value;
    const servico = inputServico.value;

    if(nome == ''){
        alert('Preencha pelo menos o nome para continuar');
    }else{

        let Cliente = {
            nome : nome,
            sexo : sexo,
            dia : dia,
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

        //alert('Cliente: '+Cliente.nome+' Registrado com sucesso!');
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

function maiorRegistro(Objects){
    let maiorDiaSemana;
    let dias = {
        segunda:0, terca:0, quarta:0, quinta: 0, sexta:0, sabado:0
    }
    for (let i in Objects){
        if(Objects[i].hora.dsemana == 0) dias.segunda++;
        else if(Objects[i].hora.dsemana == 1) dias.terca++;
        else if(Objects[i].hora.dsemana == 2) dias.quarta++;
        else if(Objects[i].hora.dsemana == 3) dias.quinta++;
        else if(Objects[i].hora.dsemana == 4) dias.sexta++;
        else if(Objects[i].hora.dsemana == 5) dias.sabado++;
    }
    let arrayD = Object.values(dias);
    let total = Math.max.apply(null, arrayD);
    let maiorIndice = arrayD.indexOf(total);

    switch(maiorIndice){
        case 0: maiorDiaSemana = 'Segunda-Feira';
        break;
        case 1: maiorDiaSemana = 'Terça-Feira';
        break;
        case 2: maiorDiaSemana = 'Quarta-Feira';
        break;
        case 3: maiorDiaSemana = 'Quinta-Feira';
        break;
        case 4: maiorDiaSemana = 'Sexta-Feira';
        break;
        case 5: maiorDiaSemana = 'Sábado';
        break;
        default : console.log('ERRO');
    }
    let array = [maiorDiaSemana, total];
    return array;

}
















