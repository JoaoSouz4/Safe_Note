const remove = document.querySelector('.pop');
let ultimoNome;
let confirmacao;

remove.addEventListener('click', function(){

    if(contador<=0) alert('Todos os clientes já foram removidos. Não há clientes para remover');
    else{
        ultimoNome = arrayClientela[arrayClientela.length-1].nome;
        confirmacao = confirm('Tem certeza que deseja remover '+ultimoNome+" da lista?");

        if(confirmacao == true){
            alert('Cliente removido');
            contador--;
            spancontador.innerHTML = contador;
            arrayClientela.pop();
            console.log(arrayClientela);

        }else return;
    }
});