import Cilindro from "../models/Cilindro.js"

describe('Teste unitário das funções do cilindro', ()=>{
    test('Deve calcular a área do cilindro', ()=>{
        // raio = 2, altura = 2
        // Área da base  = π . r² 
        const cilindro = new Cilindro(2,2)
        const resultado = 12.566
        expect(cilindro.calcularArea()).toBeCloseTo(resultado, 3)
    })
    test('Deve calcular o volume do cilindro', ()=>{
        // raio = 2, altura = 2
        // volume = Area da base . altura
        const cilindro = new Cilindro(2,2)
        const resultado = 25.133
        expect(cilindro.calcularVolume()).toBeCloseTo(resultado, 3)
    })
})