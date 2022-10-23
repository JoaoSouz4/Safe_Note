function encontrarMaiorGenero(array){
    let m = 0;
    let f = 0;
    let porcentM, porcentF, total;
    let resultado = [];

       for( let i = 0; i<array.length;i++){
            if(array[i].sexo == 'Masculino') m++
            else if (array[i].sexo == 'Feminino') f++
       }
       total = m+f;
       porcentM = (m*100)/total;
       porcentF = (f*100)/total;   

       resultado = [porcentM, porcentF];
       
       return resultado;
}
       