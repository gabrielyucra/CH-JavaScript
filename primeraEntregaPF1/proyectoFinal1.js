let nombre, apellido, edad, testimonio, otro, obj, cont=0;
function pedirDatos(){
    const array = []
    do{
        nombre = prompt("Ingrese el nombre");
        apellido = prompt("Ingrese el apellido");
        edad = prompt("Ingrese la edad");
        otro = prompt("-------------------Desea ingresar otro objeto -----------------").toLowerCase()
        const cliente = new Cliente(nombre, apellido, edad, testimonio)
        array.push(cliente);
    }while(otro=="si")
    return array;
}
class Cliente{
    constructor(nombre, apellido, edad){
        this.nombre= nombre
        this.apellido= apellido
        this.edad= edad
    }
}

array1 = pedirDatos();
array1.forEach((elemento) => console.log(elemento))


//Clientes ordenados por edad
array1.sort((a, b) => a.edad - b.edad); 
console.log(array1)


buscar=array1.some((elem)=>elem.nombre ==="marco")
if(buscar==true){
    console.log("Hola Marco! :D")
}


//Filtrar los menores de 18
const menores = array1.filter((el) => el.edad < 18)
menores.forEach((elemento) => console.log(elemento))
