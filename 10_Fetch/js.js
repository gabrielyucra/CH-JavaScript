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

(localStorage.getItem("darkMode")) ? darkMode = localStorage.getItem("darkMode") : localStorage.setItem("darkMode", "claro")

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
    <div class="tarjeta-cliente">
        <p>${cliente.nombre} ${cliente.apellido}</p>
        <p>${cliente.edad} años</p>
        <p><i>"${cliente.testimonio}"</i></p>
    </div>
    `
})
Toastify({
    text: "Cliente agregado con exito",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
        background: "linear-gradient(to top, #061700, #52c234)",
    },
    }).showToast();
})

console.log(array)

const divPersonas= document.getElementById(`personas`)

fetch("./personas/json.json")
.then(response => response.json())
.then(personas => {
    personas.forEach((persona)=>{
        divPersonas.innerHTML +=
        `
        <div class="tarjeta">
        <p>${persona.nombre} ${persona.apellido}</p>
        <p>${persona.edad} años</p>
        <p><i>"${persona.testimonio}"</i></p>
        </div>
        `
    })
})