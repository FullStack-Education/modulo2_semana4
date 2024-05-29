let nomes = ["Maria", "Paulo", "Bruno", "Gabriela"]

// for(let i = 0; i < nomes.length; i++){
//   console.log(nomes[i])
// }

// 1º - o valor atual
// 2º - o índice do valor atual
// 3º - o próprio array
nomes.map((nome, index, array) => {
  console.log(nome)
  console.log(index)
  console.log(array)
})

// function imprime(nome){
//   console.log(nome)
// }
