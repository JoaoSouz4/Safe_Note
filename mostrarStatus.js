function mostrarStatus(sexo,semana,servico){

    console.log('              ESTATÍSTICAS DE GENERO:           ')
    console.log(`${sexo[0]}% dos clientes registrados são Homens `);
    console.log(`${sexo[1]}% dos clientes registrados são Mulheres `);
    console.log('');
    console.log('     ESTATÍTISCAS DE MAIOR REGISTRO DE CLIENTE'  );
    console.log(`O dia de maior movimento foi: ${semana[0]} (${semana[2][0]}/${semana[2][1]}/${semana[2][2]})`);
    console.log(`Contendo: ${semana[1]} clientes registrado neste dia`);
    console.log(``);
    console.log(`             ESTATISTICAS SOBRE OS SERVICOS:         `);
    console.log(`O serviço mais procurado na semana foi: ${servico[0]}`);
    console.log(`Contendo ${servico[1]} novas solicitações de ${servico[0]}`);

}
    
