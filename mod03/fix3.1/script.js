let n1 = Number(prompt("Digite o 1º número."));
let n2 = Number(prompt("Digite o 2º número."));
let n3 = Number(prompt("Digite o 3º número."));

let numeros = [n1, n2, n3];

numeros.sort((a, b) => {
    return a - b;
});

alert(`Os números digitados em ordem crescente são ${numeros}.`);