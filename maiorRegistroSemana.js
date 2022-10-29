function maiorRegistro(Objects){
    let maiorDiaSemana;
    let dias = {
        domingo: 0, segunda:0, terca:0, quarta:0, quinta: 0, sexta:0, sabado:0
    }
    for (let i in Objects){
        if(Objects[i].hora.dsemana == 1) dias.segunda++;
        else if(Objects[i].hora.dsemana == 2) dias.terca++;
        else if(Objects[i].hora.dsemana == 3) dias.quarta++;
        else if(Objects[i].hora.dsemana == 4) dias.quinta++;
        else if(Objects[i].hora.dsemana == 5) dias.sexta++;
        else if(Objects[i].hora.dsemana == 6) dias.sabado++;
    }
    let arrayD = Object.values(dias);
    let total = Math.max.apply(null, arrayD);
    let maiorIndice = arrayD.indexOf(total);
    let diaSemana = pegarData(Objects, maiorIndice);
    console.log(diaSemana);

    switch(maiorIndice){
        case 0: maiorDiaSemana = 'Domingo';
        break;
        case 1: maiorDiaSemana = 'Segunda-Feira';
        break;
        case 2: maiorDiaSemana = 'Terça-Feira';
        break;
        case 3: maiorDiaSemana = 'Quarta-Feira';
        break;
        case 4: maiorDiaSemana = 'Quinta-Feira';
        break;
        case 5: maiorDiaSemana = 'Sexta-Feira';
        break;
        case 6: maiorDiaSemana = 'Sábado';
        default : console.log('ERRO');
    }

    let array = [maiorDiaSemana, total, diaSemana];
    return array;
}

function pegarData(Object, m){
    let dia, mes, ano;
    for( let i in Object){
        if(Object[i].hora.dsemana == m){
            dia = Object[i].hora.dia;
            mes = Object[i].hora.mes;
            ano = Object[i].hora.ano;
        }
    }
    return array =[dia,mes,ano];
    
}