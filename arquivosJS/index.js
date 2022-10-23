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

        //saída de dados*

        let registro = encontrarMaiorDia(arrayClientela);
        let soma = somarArray(registro[2]);

        alert('Cliente: '+Cliente.nome+' Registrado com sucesso!');

        console.log(arrayClientela);
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












