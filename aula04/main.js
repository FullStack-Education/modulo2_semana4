import {soma, subtrair} from "./scripts/calculadora.js"
import multiplicarFunc from "./scripts/calculadora.js"
// import * as calculadora from "./scripts/calculadora.js"
import alertFunc from "./scripts/mensagens.js"

const resultadoSoma = soma(5, 3)
const resultadoSubtrair = subtrair(5, 3)
// calculadora.subtrair(2, 5)
console.log(resultadoSoma)
console.log(resultadoSubtrair)

alertFunc("Mensagem teste do alert!")

const resultadoMultiplicacao = multiplicarFunc(2, 3)
console.log(resultadoMultiplicacao)