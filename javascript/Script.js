let  data1;
let data2;

//Joga o imput para o tipo Date
function ler(){

    data1 = new Date(document.getElementById("data1").value);
    
    data2 = new Date(document.getElementById("data2").value);
    
    // Ajusta as datas para considerar o fuso horário local
    data1.setTime(data1.getTime() + data1.getTimezoneOffset() * 60 * 1000);
    data2.setTime(data2.getTime() + data2.getTimezoneOffset() * 60 * 1000);

    apresentarHtml();
}

//Função para retornar o parâmetro Date mais recente em formato padrão
function maiorData(data1, data2) {
    let maiorData = data1 > data2 ? data1 : data2;
    let dia = String(maiorData.getDate()).padStart(2, '0');
    let mes = String(maiorData.getMonth() + 1).padStart(2, '0');
    let ano = maiorData.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

//Função para calcular o intervalo entre duas datas
function calcularIntervalo(data1, data2) {
    if(data1 > data2){
        let temp = data2;
        data2 = data1;
        data1 = temp
    }

    //A diferença sempre vem em milissegundos
    let diferencaEmMilissegundos = data2 - data1;
    let umDiaEmMilissegundos = 1000 * 60 * 60 * 24;
    
    let diferencaEmDias = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);
    return diferencaEmDias;
}

//Função para retornar a data atual no formato especificado
function dataAtual() {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let hora = String(data.getHours()).padStart(2, '0');
    let minuto = String(data.getMinutes()).padStart(2, '0');
    
    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

// Apresenta no html
function apresentarHtml(){
    let apresenta = document.getElementById("apresenta");
    
    let intervalo = calcularIntervalo(data1, data2);
    let maior = maiorData(data1, data2);
    let atual = dataAtual()
    
    apresenta.innerHTML = `
    <div>Maior data:\n ${maior}</div>
    <div>Intervalo de dias:\n ${intervalo}</div>
    <div>Data atual:\n ${atual}</div>`;
    
}