let numeroMagico

const comenzarJuego = ()=>{
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    console.log(numeroMagico)
    const mensajeAdivinaste = document.querySelector('.alert-success')
    const mensajeEsMenorMayor = document.querySelector('.alert-warning')
    mensajeAdivinaste.classList.add('d-none')
    mensajeEsMenorMayor.classList.add('d-none')
}

const adivinarNumero = ()=>{
    const numero = parseInt(document.querySelector('.form-control').value)
    console.log(numero)
    if(numeroMagico!= undefined){
        if(numero === numeroMagico){
            const mensajeAdivinaste = document.querySelector('.alert-success')
            const mensajeEsMenorMayor = document.querySelector('.alert-warning')
            mensajeEsMenorMayor.classList.add('d-none')
            mensajeAdivinaste.classList.remove('d-none')
        }else if(numero > numeroMagico){
            const mensajeEsMenor = document.querySelector('.alert-warning')
            mensajeEsMenor.classList.remove('d-none')
            mensajeEsMenor.textContent = "El número es menor"
        }else if(numero < numeroMagico){
            const mensajeEsMayor = document.querySelector('.alert-warning')
            mensajeEsMayor.classList.remove('d-none')
            mensajeEsMayor.textContent = "El número es mayor"
        }else{
            const mensajeNoValido = document.querySelector('.alert-warning')
            mensajeNoValido.classList.remove('d-none')
            mensajeNoValido.textContent = "Ingrese un número valido"
        }
    }else{
        console.log("Debe presionar el boton comenzar juego")
    }
} 

const btnComenzar = document.querySelector('.btn-warning')
const btnAdivinarNumero = document.getElementById('button-addon2')

btnComenzar.addEventListener('click', comenzarJuego)
btnAdivinarNumero.addEventListener('click', adivinarNumero)
console.log(btnAdivinarNumero)