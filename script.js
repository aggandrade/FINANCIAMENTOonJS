const calcular = document.getElementById('calcular');


function financiamento () {
    const renda = document.getElementById('renda').value;
    const valor = document.getElementById('valor').value;
    const entrada = document.getElementById('entrada').value;
    const juros = document.getElementById('juros').value;
    const n = document.getElementById('parcela').value;
    const resultado = document.getElementById('resultado');

    if (renda !== '' && valor !== '' && entrada !== '' && juros !== '' && parcela !== '' ) {

        const financiamento = (valor-entrada);
        let i = juros/100;
        const prestacao = ((((1+i)**n)*i)*financiamento)/(((1+i)**n)-1);
        const valorlimite = (0.3*renda);

        if (prestacao < valorlimite){
            resultado.textContent = 'Olá, o Financiamento foi aprovado!';
        }else if (prestacao == valorlimite) {
            resultado.textContent = 'Olá, o Financiamento foi aprovado!';
        }else if (prestacao > valorlimite){
            resultado.textContent = 'Olá, o Financiamento foi negado!';

    }else {
        resultado.textContent = 'Para calcular o Financiamento , preencha todos os campos.';
    }

}
}
calcular.addEventListener('click', financiamento);