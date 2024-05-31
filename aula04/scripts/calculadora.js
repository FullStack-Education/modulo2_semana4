/**
 * função para somar dois números
 * @param {number} a 
 * @param {number} b 
 * @returns {number} - A soma de a + b. Ex: 10 + 5 = 15
 */
export function soma(a, b){
  return a + b
}

export function subtrair(a, b){
  return a - b
}

function multiplicar(a, b){
  return a * b
}

export default multiplicar

// export {
//   soma,
//   subtrair
// }

// const resultadoSoma = soma(5, 3)
// const resultadoSubtrair = subtrair(5, 3)
// console.log(resultadoSoma)
// console.log(resultadoSubtrair)