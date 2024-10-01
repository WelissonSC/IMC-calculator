escopo = () => {
    const form = document.querySelector('.form');


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const peso = document.querySelector('#peso');
        const altura = document.querySelector('#altura');
        const resposta = document.querySelector('.resultado-area');
        let pesoNumber = Number(peso.value);
        let alturaNumber = Number(altura.value);

        let imc = calcularIMC(pesoNumber, alturaNumber)
        verificaIMC(imc, pesoNumber, alturaNumber, resposta)
        verificaValorDigitado(pesoNumber, alturaNumber, resposta)


        console.log(imc);

    })
}

calcularIMC = (pesoNumber, alturaNumber) => {
    let altura = alturaNumber / 100;
    let imc = pesoNumber / (altura * altura)
    return imc.toFixed(2);
}

verificaValorDigitado = (pesoNumber, alturaNumber, resposta) => {
    if (pesoNumber <= 10 || alturaNumber <= 10 || pesoNumber >= 300 || alturaNumber >= 300 ) {
        resposta.innerHTML = `<p class="calculo text">Insira um valor entre 10 e 300</p>`
        resposta.style = 'background-color : #FF0000';
        return;
    }
}

verificaIMC = (imc, pesoNumber, alturaNumber, resposta) => {



    if (imc <= 18.5) {
        resposta.innerHTML = `<p class="calculo text">Seu IMC é ${imc} (Abaixo do peso)</p>`
        resposta.style = 'background-color : #dbdb24a8';
    } else if (imc > 18.6 && imc <= 24.9) {
        resposta.innerHTML = `<p class="calculo text">Seu IMC é ${imc} (Normal)</p>`
        resposta.style = 'background-color : #33a70d8f';
    } else if (imc > 25 && imc <= 29.9) {
        resposta.innerHTML = `<p class="calculo text">Seu IMC é ${imc} (Acima do peso)</p>`
        resposta.style = 'background-color : #e70c0c86';
    } else if (imc > 30 && imc <= 34.9) {
        resposta.innerHTML = `<p class="calculo text">Seu IMC é ${imc} (Obsidade grau I)</p>`
        resposta.style = 'background-color : #970606a8';
    } else if (imc > 35 && imc <= 39.9) {
        resposta.innerHTML = `<p class="calculo text">Seu IMC é ${imc} (Obsidade grau II)</p>`
        resposta.style = 'background-color : #970606a8';
    } else if (imc >= 40) {
        resposta.innerHTML = `<p class="calculo text">Seu IMC é ${imc} (Obsidade grau III)</p>`
        resposta.style = 'background-color : #970606a8';
    } else {
        resposta.innerHTML = `<p class="calculo text">Digite somente Números</p>`
        resposta.style = 'background-color : #970606a8';
    }

}

escopo();

