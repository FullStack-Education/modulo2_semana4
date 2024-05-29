// let numeros = [5, 2, 4, 3]

// const novoArray = numeros.map((numeroAtual) => {
//   return numeroAtual * 2
// })

// console.log(numeros)
// console.log(novoArray)

let numeros = [5, 8, 3, 6]

const novoArray = []
const novoArray2 = numeros.map((n) => {
  novoArray.push(n * 3)
  return n * 3
})

//console.log(n)

console.log(novoArray)
console.log(novoArray2)