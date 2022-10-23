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