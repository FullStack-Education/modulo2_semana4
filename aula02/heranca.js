// classe mãe ou generalização
class Funcionario {
  nome
  idade
  telefone
  salario

  constructor(nome, idade, telefone, salario){
    this.nome = nome
    this.idade = idade
    this.telefone = telefone
    this.salario = salario
  }

  aumentarSalario(){
    salario += 150
  }
}
//                  é um
// classe filha ou especialização
class Programador extends Funcionario {
  stack
  constructor(nome, idade, telefone, salario, stack){
    super(nome, idade, telefone, salario)
    this.stack = stack
  }

  aumentarSalario(){
    salario += 250
  }
}

let bruno = new Programador()
bruno.nome = "Bruno"
bruno.stack = "C#"

let marcos = new Funcionario()