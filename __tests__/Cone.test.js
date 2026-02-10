import Cone from '../models/Cone.js'

describe('Teste unitário das funções do Cone', ()=>{
    test('Deve calcular a área do Cone', ()=>{
        // raio = 2, altura = 2
        // Área da base  = π . r²
        const cone = new Cone(2,2)
        const resultado = 12.566
        expect(cone.calcularArea()).toBeCloseTo(resultado, 3)
    })
    test('Deve calcular o volume do Cilindro', ()=>{
        // raio = 2, altura = 2
        // volume = Area da base . altura
        const cone = new Cone(2,2)
        const resultado = 8.378
        expect(cone.calcularVolume()).toBeCloseTo(resultado, 3)
    })
})