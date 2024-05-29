// let numeros = [12, 5, 2, 8, 10]

// let soma = numeros.reduce((total, numeroAtual) => {
//   return numeroAtual + total
// }, 0)

// console.log(soma)

let numeros = [1, 22, 31, 40, 3, 5]

let maior = numeros.reduce((atualMaior, n) => {
  if(n > atualMaior){
    return n
  } else {
    return atualMaior
  }
}, 0)

console.log(maior)