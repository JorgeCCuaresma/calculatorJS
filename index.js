const botonNumeros = document.getElementsByClassName("number")
const botonOperador = document.getElementsByClassName("operador")
const botonIgual = document.getElementById("igual")
const botonBorrar = document.getElementById("ce")
const arrayBotonNumeros = Array.from(botonNumeros)
const arrayBotonOperador = Array.from(botonOperador)

let operando1 = "";
let operando2 = "";
let operacion ;
let display = document.getElementById("display")


arrayBotonNumeros.forEach(function(boton){
   boton.addEventListener('click', ()=>{
       addNumberDisplay(boton.innerText)
   })
})

arrayBotonOperador.forEach(function(boton){
   boton.addEventListener('click', ()=>{
      addOperacion(boton.innerText)
   })
})


const addNumberDisplay = (numero) =>{
   operando1 = operando1.toString() + numero.toString();
      refreshdisplay()
}

const refreshdisplay = () => {
   display.value = operando1
    
}

const addOperacion = (simbolo) =>{
  if(operando1 === "") return;
  if(operando1 !== "") {refreshdisplay()}
 operacion = simbolo.toString();
 operando2 = operando1
 operando1 = ""
}

const calcular = () => {
let num1 = parseFloat(operando1)
let num2 = parseFloat(operando2)
let resultado
   if(operacion === "+"){
      resultado = num1 + num2
   }else if(operacion === "-"){
      resultado= num1 - num2
   }else if(operacion === "X"){
      resultado= num1 * num2
   }else if(operacion = "/"){
      resultado = num2 / num1
   }
   operando1 = resultado
   operando2 = ""
   operacion = undefined
}

botonIgual.addEventListener('click', ()=>{
         calcular()
         refreshdisplay()
})

function reset(){
   display.value ="" 
   operando1=""
   operando2=""
}


