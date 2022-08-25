
class Cliente{
    constructor(nombre, apellido, edad, testimonio){
        this.nombre= nombre
        this.apellido= apellido
        this.edad= edad
        this.testimonio= testimonio
    }
}

const cliente1 = new Cliente("Guillermo", "Francella", 55, "Hermosa mañana verdad?")
const cliente2 = new Cliente("Lionel", "Messi", 35, "Messirve B|")
const cliente3 = new Cliente("Isabel", "Segunda", 147, "I love Maradona")

const clientes = [cliente1, cliente2, cliente3]

for(let i=0; i<clientes.length; i++){
    console.log(clientes[i])
}

clientes.pop()

for(let i=0; i<clientes.length; i++){
    console.log(clientes[i])
}
