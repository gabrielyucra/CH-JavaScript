class Cliente{
    constructor(nombre, apellido, edad, testimonio){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.testimonio = testimonio;
    }
}
function crearObj(nombre, apellido, edad, testimonio){
    const cliente = new Cliente(nombre, apellido, edad, testimonio)
    array.push(cliente)
    localStorage.setItem('cliente', JSON.stringify(array))
}

const dark = document.getElementById('m-dark')
const claro = document.getElementById('m-claro')

let darkMode;

if(localStorage.getItem("darkMode")) {
    darkMode = localStorage.getItem("darkMode")
} 
    else {
        localStorage.setItem("darkMode", "claro")
    }

if(darkMode == "dark") {
    document.body.classList.add("modo-oscuro")
}

dark.addEventListener('click', () => {
    document.body.classList.add("modo-oscuro")
    localStorage.setItem('darkMode', "dark")
})

claro.addEventListener('click', () => {
    document.body.classList.remove("modo-oscuro")
    localStorage.setItem('darkMode', "light")
})

const formulario = document.getElementById("form")
const array = [];

formulario.addEventListener(`submit`, (e)=>{
    e.preventDefault()   

    let nombre = document.getElementById('name').value
    let apellido = document.getElementById('lastName').value
    let edad = document.getElementById('yearsOld').value
    let testimonio = document.getElementById('experiencia').value

    crearObj(nombre, apellido, edad, testimonio)

    formulario.reset()

    const divCliente = document.getElementById(`clientes`)
    divCliente.innerHTML = "";

    array.forEach(cliente=>{
    divCliente.innerHTML +=
    `
    <div style="margin:20px; padding: 20px; color: white; background-color:#1b1717;">
        <p>${cliente.nombre} ${cliente.apellido}</p>
        <p>${cliente.edad} años</p>
        <p><i>"${cliente.testimonio}"</i></p>
    </div>
    `
})
})

console.log(array)