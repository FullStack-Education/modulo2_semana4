let numeros = [5, 2, 4, 3, 8, 7]

let novoArrayPares = numeros.filter((numeroAtual) => {
  if(numeroAtual % 2 == 0){
    return true
  }
})

console.log(novoArrayPares)