import Cilindro from './models/Cilindro.js'
import Cone from './models/Cone.js'

let resposta = document.getElementById('resposta')
let prog_principal = document.getElementById('prog_principal')

prog_principal.addEventListener('click', (e)=>{
    e.preventDefault()

    let tipo = document.getElementById('tipo').value
    let raio = Number(document.getElementById('raio').value)
    let altura = Number(document.getElementById('altura').value)

    resposta.innerHTML = ``

    if( raio > 0 && altura > 0){
        calcularSolidos(raio,altura,tipo)
    }else{
        resposta.innerHTML += `Valor(es) invalido(s)! <br>`
        resposta.innerHTML += `Os valores de raio e altura devem ser maior que zero! <br>`
        resposta.innerHTML += `Digite novamente usando valores válidos!!`
    }    
})

function calcularSolidos(raio,altura,tipo){
    const cilindro = new Cilindro(raio,altura)
    const cone = new Cone(raio,altura)  

    if(tipo === 'cone'){
        
        let areaCone = cone.calcularArea().toFixed(3)
        let volumeCone = cone.calcularVolume().toFixed(3)
        console.log(`--------------------------------------`)
        console.log(`A área do cone é: ${areaCone} m²`)
        console.log(`O Volume do Cone é: ${volumeCone} m³`)
        console.log(`--------------------------------------`)

        resposta.innerHTML += `A área do cone é: ${areaCone} m² <br>`
        resposta.innerHTML += `O Volume do Cone é: ${volumeCone} m³`  

    }else if(tipo === 'cilindro'){

        let areaCilindro = cilindro.calcularArea().toFixed(3)
        let volumeCilindro = cilindro.calcularVolume().toFixed(3)
        console.log(`--------------------------------------`)
        console.log(`A área do Cilindro é: ${areaCilindro} m²`)
        console.log(`O Volume do Cilindro é: ${volumeCilindro} m³`)
        console.log(`--------------------------------------`)

        resposta.innerHTML += `A área do Cilindro é: ${areaCilindro} m² <br>`
        resposta.innerHTML += `O Volume do Cilindro é: ${volumeCilindro} m³` 
    }
}
