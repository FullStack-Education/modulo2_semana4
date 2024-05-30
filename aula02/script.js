// objeto simples
const usuario = {
  email: "bruno@email.com",
  senha: "123456",
  nome: "Bruno"
}

//console.log(usuario)
usuario.idade = 25
//console.log(usuario)

//class
class Carro {
  // atributos
  modelo
  cor
  marca

  constructor(valorModelo, valorCor, valorMarca){
    if(typeof valorMarca == 'string'){
      this.marca = valorMarca
    }

    this.modelo = valorModelo
    this.cor = valorCor
  }

  // parâmetro default
  acelerar(km = 10){
    if(km > 0){
      console.log("Acelerando a " + km + " por hora")
    } else {
      console.log("Acelerando...")
    }
  }

  trocarMarca(novaMarca){
    this.marca = novaMarca
  }
}

// instanciação com construtor
let corolla = new Carro("Corolla", "Prata", "Toyota")
corolla.acelerar()
//corolla.trocarMarca("JEEP")
console.log(corolla)