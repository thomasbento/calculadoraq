const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificado = '';
    
        if (valorIMC < 18.5){
            classificacao = 'ta seco';
         }else if (valorIMC < 25) {
            classificaçao = 'ta massa, peso certo.';
         }else if (valorIMC < 30){
            classificacao = 'um pouco acima do peso.';
         }else if (valorIMC < 35){
            classificacao = 'ta obeso, grau 1.';
         }else if(valorIMC < 40){
            classificacao = 'gordo, grau 2.';
         }else {
            classificacao = 'gordaooo, grau 3, cuidado gordin.';
         }

         resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificacao}`;

        }else {
            resultado.textContent = 'Preencha todos os campos';
        }
    }
calcular.addEventListener('click', imc);
