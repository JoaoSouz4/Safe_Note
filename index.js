let arrayClientela = [];
let contador = 0;

const btn = document.querySelector('#btn');
const remove = document.querySelector('.pop');
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
        //console.log(arrayClientela);
        //alert('Cliente: '+Cliente.nome+' Registrado com sucesso!');

        let registro = encontrarMaiorDia(arrayClientela);
        let soma = somarArray(registro[2]);
        console.log('O dia de maior registro foi: '+registro[0]+", "+registro[1]+" novos clientes foram adicionados neste dia");
        console.log('Total clientes registrados: '+soma);
});

remove.addEventListener('click', function(){
    if(contador<=0) alert('Todos os clientes já foram removidos');
    else{
        contador--;
        spancontador.innerHTML = contador;
        arrayClientela.pop();
        console.log(arrayClientela);
    }
});

function encontrarMaiorGenero(array){
    let M = 0;
    let F = 0;
       for( let i = 0; i<array.length;i++){
            if(array[i].sexo == 'Masculino') M++
            else if (array[i].sexo == 'Feminino') F++
       }
       if(M>F){
        console.log('A maioria são Homens: '+M)
        return M
       } 

       else if(F>M){
        console.log('A maioria são mulheres: '+F);
       } 
       else if(M==F){
        console.log('Empate');
        return F;
       }  
}

function encontrarMaiorDia(array){
    let arrayDia=[];
    let numeroClientes;
    let maiorDiaIndice;
    let maiorDiaSemana;
    let dias = {
              segunda:0,terca:0,quarta:0,quinta:0,sexta:0,sabado:0
        }

        for(let i = 0;i<array.length;i++){
            if(array[i].dia == 'Segunda-Feira') dias.segunda++;
            else if(array[i].dia == 'Terça-Feira') dias.terca++;
            else if(array[i].dia == 'Quarta-Feira') dias.quarta++;
            else if(array[i].dia == 'Quinta-Feira') dias.quinta++;
            else if(array[i].dia == 'Sexta-Feira') dias.sexta++;
            else if(array[i].dia == 'Sábado') dias.sabado++;
        }
    let arraydias = Object.values(dias);

     numeroClientes = Math.max.apply(null, arraydias);
     maiorDiaIndice = arraydias.indexOf(numeroClientes);
     maiorDiaSemana;

        switch(maiorDiaIndice){
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

        arrayDia =[maiorDiaSemana, numeroClientes, arraydias]

    return arrayDia; 
}
function somarArray(array){
    let soma = 0;
    for(let i = 0; i<array.length;i++){
        soma = soma+array[i];
    }
    return soma;
}








