const usuario = {
  nome: "Bruno",
  idade: 25,
  email: "bruno@email.com",
  senha: 123456
}

const usuario2 = {...usuario}
usuario2.nome = "Arthur"

console.log(usuario)
console.log(usuario2)

const {email, nome} = usuario2

console.log(email)
console.log(nome)
console.log(usuario2)