// Problema: descobrir quantos dias tem um mês de um certo ano.
// 1. Receber o número do mês (1 a 12) e o ano.
// 2. Se o mês não estiver entre 1 e 12, avisar que o mês é inválido e parar.
// 3. Se o mês for 1, 3, 5, 7, 8, 10 ou 12, a resposta é 31.
// 4. Se o mês for 4, 6, 9 ou 11, a resposta é 31.
// 5. Se o mês for 2:
//  a) se o ano for bissexto, a resposta é 29;
//  b) se não for, a resposta é 28.

function diasNoMes(mes, ano) {
    // Passo 2
    if (mes < 1 || mes > 12) {
        return null
    }

    // Passo 3

    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        return 31
    }

    // Passo 4

    if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        return 30
    }

    // Passo 5: só sobrou fevereiro

    if (anoBissexto(ano)) {
        return 29
    }
    return 28
}

// Problema: saber se um ano tem 29 de fevereiro (ano bissexto)
// 1. Receber o ano.
// 2. Se o ano for divisível por 400, é bissexto.
// 3. Se o ano for divisível por 100, não é bissexto.
// 4. Se o ano for divisível por 4, é bissexto.
// 5. Em qualquer outro caso, não é bissexto.

function anoBissexto(ano) {
    // Passo 2
    if (ano % 400 === 0) {
        return true
    }
    // Passo 3
    if (ano % 100 === 0) {
        return false
    }
    // Passo 4
    if (ano % 4 === 0) {
        return true
    }
    // Passo 5
    return false
}

console.log(diasNoMes(11, 2026))
console.log(diasNoMes(1, 2026))
console.log(diasNoMes(13, 2026))
console.log(diasNoMes(2, 2028))
console.log(diasNoMes(2, 2026))
console.log(diasNoMes(2, 1900))
console.log(diasNoMes(2, 2000))



