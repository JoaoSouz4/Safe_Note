class Cliente{
    constructor(nome,sexo,servicoSolicitaodo,dia,mes,ano,horas,minutos,dsemana){
        this.nome = nome;
        this.sexo = sexo;
        this.servico = servicoSolicitaodo;
        this.dataRegistro = {
                dia: dia,
                mes: mes,
                ano: ano,
                horas: horas,
                minuto: minutos,
                dsemana : dsemana
            }
    }
}



