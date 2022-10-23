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