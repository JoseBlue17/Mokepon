const sectionAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar =document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")


const sectionSeleccionarMascota =  document.getElementById("seleccionar-mascota")

const inputsquirle = document.getElementById('squirle')
const inputExcadril = document.getElementById('Excadril')
const inputCharizard = document.getElementById('Charizard')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")


const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")


let ataqueJugador
let ataqueEnemigo
let vidasEnemigo = 3
let vidasJugador = 3

class Mokepon { 
    constructor(nombre,foto,vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }

}

let squirle = new Mokepon('Squirle','./R-removebg-preview.png',5)

let Excadril = new Mokepon('Excadril','Drilbur.png',5)

let Charizard = new Mokepon('Charizard', './kisspng-charizard-pokmon-xd-gale-of-darkness-pokmon-f-charizard-5b202a44cddc06.4799396415288346288432-removebg-preview.png',5)

function iniciarJuego(){

    
    sectionAtaque.style.display= 'none'
   
    sectionReiniciar.style.display='none'
     botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
        
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
     botonTierra.addEventListener('click',ataqueTierra)
    botonReiniciar.addEventListener("click",reiniciarJuego)
}


function seleccionarMascotaJugador(){
   
   
    sectionSeleccionarMascota.style.display  ='none'
   
    sectionAtaque.style.display  ='flex'
    

   if (inputsquirle.checked){
    spanMascotaJugador.innerHTML = 'squirle'
  } else if (inputExcadril.checked){ 
    spanMascotaJugador.innerHTML = 'Excadril'
}   else if (inputCharizard.checked){
    spanMascotaJugador.innerHTML = 'Charizard'
    } else{
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()

}    
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
  
       
    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Squirle'
    }  else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Excadril'
    } else{
        spanMascotaEnemigo.innerHTML = 'charizard'
    }
}
function ataqueFuego(){
  ataqueJugador = 'FUEGO'
  ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()

}

function ataqueAleatorioEnemigo(){
let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
    ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2){
    ataqueEnemigo = 'AGUA'
    } else{
    ataqueEnemigo = 'TIERRA'
    } 
   
    combate()
}    

function combate(){
    

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate🤝")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE🎉") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
       
    }else{
        crearMensaje("PERDISTE😥")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

    }
        revisarVidas()

}
    function revisarVidas(){
        if (vidasEnemigo ==0){
            crearMensajeFinal("Felicitaciones,Ganaste")
        }else if (vidasJugador == 0){
            crearMensajeFinal("PERDISTE VUELVELO A INTENTAR😥")
        }
 
       
      
    }
   
function crearMensaje(resultado){



let nuevoAtaqueDelJugador = document.createElement('p')
let nuevoAtaqueDelEnemigo = document.createElement('p')

sectionMensajes.innerHTML= resultado
nuevoAtaqueDelJugador.innerHTML = ataqueJugador
nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)


}
function crearMensajeFinal(resultadoFinal){


sectionMensajes.innerHTML = resultadoFinal


botonFuego.disabled = true


botonAgua.disabled = true


botonTierra.disabled = true


    sectionReiniciar.style.display ='block'

}

function reiniciarJuego(){
    
location.reload()
}

function aleatorio ( min, max){
return Math.floor(Math.random() * (max - min + 1) + min )
}
    window.addEventListener('load', iniciarJuego)