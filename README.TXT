    Função date permite trabalhar com datas e horas. Possibilitando diversas opreções, como obtenção de componentes individuais(ano,mês, dia, hora, minutos,segundos, milisegundos), formatos e calculos de intervalos.
Se escrever var(criar uma variável)= new Date(); vai pegar data e hora do sistema 
Se var= new Date('2024-06-10), vai aparecer data em string.
Se var = new Date(2024,4,6,10,0,0) com os valores individuais para ano, mês, dia, etc
    Alguns métodos importantes da função Date:
* getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(): Obtêm os componentes individuais da data e hora.
* toString(): Retorna uma representação da data em formato de string.
* toISOString(): Retorna uma string no formato ISO da data.
* getTime(): Retorna o timestamp (milissegundos desde 1 de janeiro de 1970 00:00:00 UTC).
    Calcular intervalos entre duas datas:
    diffTime data2 - data1;
    Adicionar 1 dia a uma data:
    data.setDate(data.getDate()+1);