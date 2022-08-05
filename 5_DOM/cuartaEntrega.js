let nombre, apellido, edad, testimonio, otro;
function pedirDatos(){
    const array = []
    do{
        nombre = prompt("Ingrese el nombre").toUpperCase();
        apellido = prompt("Ingrese el apellido").toUpperCase();
        edad = prompt("Ingrese la edad");
        testimonio = prompt("Ingrese su testimonio");
        otro = prompt("-------------------Desea agregar otro cliente -----------------").toLowerCase()
        const cliente = new Cliente(nombre, apellido, edad, testimonio)
        array.push(cliente);
    }while(otro=="si")
    return array;
}
class Cliente{
    constructor(nombre, apellido, edad, testimonio){
        this.nombre= nombre
        this.apellido= apellido
        this.edad= edad
        this.testimonio= testimonio
    }
}

array1 = pedirDatos();
array1.forEach((elemento) => console.log(elemento))

//Clientes ordenados por edad
array1.sort((a, b) => a.edad - b.edad); 
console.log(array1)

buscar=array1.some((elem)=>elem.nombre ==="MARCO")
if(buscar==true){
    console.log("Hola Marco! :D")
}
//Filtrar los menores de 18
const menores = array1.filter((el) => el.edad < 18)
menores.forEach((elemento) => console.log(elemento))


const divCliente = document.getElementById(`clientes`)
array1.forEach(cliente=>{
    divCliente.innerHTML +=`
    <div style="margin:20px; padding: 20px; color: white; background-color:#1b1717;">
        <p>${cliente.nombre} ${cliente.apellido}</p>
        <p>${cliente.edad} años</p>
        <p><i>" ${cliente.testimonio}"</i></p>
    </div>
    `
})

const titulo = document.getElementById("titulo");
titulo.innerText = "Clientes mas relevantes"