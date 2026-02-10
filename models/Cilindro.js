export default class Cilindro{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }

    // Área da base  = π . r² 
    calcularArea(){
        let area = 0.0
        area = Math.PI * this.raio * this.raio
        return area
    }

    // volume = Area da base . altura
    calcularVolume(){
        let volume = 0.0
        volume = this.calcularArea() * this.altura
        return volume
    }
}
