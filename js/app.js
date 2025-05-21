let numeroMagico

const comenzarJuego = ()=>{
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    console.log(numeroMagico)
    const mensajeAdivinaste = document.querySelector('.alert-success')
    const mensajeEsMenorMayor = document.querySelector('.alert-warning')
    const numero = document.querySelector('.form-control')
    numero.value = ""
    mensajeAdivinaste.classList.add('d-none')
    mensajeEsMenorMayor.classList.add('d-none')
}

const adivinarNumero = (e)=>{
    e.preventDefault();
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
        const mensajePresioneIniciar = document.querySelector('.alert-warning')
        mensajePresioneIniciar.classList.remove('d-none')
        mensajePresioneIniciar.textContent = "Presione el botón Comenzar el Juego"
    }
} 

const btnComenzar = document.querySelector('.btn-warning')
const formAdivinarNumero = document.getElementById('formNumero')

btnComenzar.addEventListener('click', comenzarJuego)
formAdivinarNumero.addEventListener('submit', adivinarNumero)