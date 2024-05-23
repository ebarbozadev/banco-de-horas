const somaHorasExtras = (salario, valorHorasExtras) => {
    return salario + valorHorasExtras
}

const calculaDescontos = (salario, descontos) => salario - descontos;

const teste = (titulo, funcaoDeTeste) => {
    try {
        funcaoDeTeste();
        console.log(`${titulo} passou`)
    } catch (error) {
        console.error(`${titulo} não passou, erro: `, error)
    }
}

const verificaSe = (valor) => {
    const assercoes = {
        eExatamenteIgualA(esperado) {
            if(valor !== esperado){
                throw{};
            }
        }
    }
    return assercoes;
}

teste('Soma das Horas Extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    verificaSe(retornado).eExatamenteIgualA(esperado);
})

teste('Calculando Desconto', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);

    verificaSe(retornado).eExatamenteIgualA(esperado);
})