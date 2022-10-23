function encontrarMaiorServico(array){
    //Entrada de dados: 
    let servicos = {
        avaliacao : 0,
        manutencao : 0,
        aparelho : 0, 
        limpeza : 0,
        restauracao : 0,
        canal : 0,
        extracao : 0,
        implante : 0,
        odontopediatria : 0,
        tp : 0,
        protese : 0
    }
    
    //Processamentos: 
    for(let i in array){
            for(let j in servicos){
                    if(array[i].servico == j) servicos[j]++;   
            }
    }   

    let arrayS = Object.values(servicos);
    let mQtd = Math.max.apply(null, arrayS);
    let indiceS = arrayS.indexOf(mQtd);

    let servicoMaisProcurado;

    switch(indiceS){
        case 0: servicoMaisProcurado = 'Avaliação';
        break;
        case 1: servicoMaisProcurado = 'Manutenção';
        break;
        case 2: servicoMaisProcurado = 'Aparelho';
        break;
        case 3: servicoMaisProcurado = 'Limpeza';
        break;
        case 4: servicoMaisProcurado = 'Restauração';
        break;
        case 5: servicoMaisProcurado = 'Canal';
        break;
        case 6: servicoMaisProcurado = 'Extração';
        break;
        case 7: servicoMaisProcurado = 'Implante';
        break;
        case 8: servicoMaisProcurado = 'Odontopediatria';
        break;
        case 9: servicoMaisProcurado = 'Tratamento Periodental';
        break;
        case 10: servicoMaisProcurado = 'Prótese';
        break;
        default: console.log('ERRO');
    }
    let arraySaida = [servicoMaisProcurado,mQtd];

    //Saídas: 
    return arraySaida;
}