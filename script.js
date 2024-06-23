// const numero = Number(prompt("Digite um número:"))

// function calcularfatorial(n){
// if(numero < 0){
//     alert("O número tem que ser positivo e inteiro")
// }
//  let fatorial = 1
//  for(let i; i <=n; i++){
//     fatorial*= i;
//  }
// }

// calcularfatorial()
// console.log(numero).round(1)

function calcularFatorial(n) {
    if (n < 0) {
        return "O número deve ser um inteiro positivo.";
    }
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}
function calcularFibonacci(n) {
    if (n < 0) {
        return "O número deve ser um inteiro positivo.";
    }
    let fibonacci = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci.slice(0, n + 1); 
}
function exibirResultados(numero) {
    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, insira um número inteiro positivo.");
        return;
    }

    const fatorial = calcularFatorial(numero);
    const fibonacci = calcularFibonacci(numero);

    console.log(`Fatorial de ${numero}: ${fatorial}`);
    console.log(`Sequência de Fibonacci até ${numero}: ${fibonacci.join(', ')}`);
}


const numero = parseInt(prompt("Insira um número inteiro positivo:"));
exibirResultados(numero);