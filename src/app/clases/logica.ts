import { Estado } from "./estado-juego";

export class Logica {

    camposJuego: Array<number> = [];
    turno:number;
    estadoJuego:Estado
    constructor () {
        this.estadoJuego = Estado.DETENER;
        this.camposJuego = [0,0,0,0,0,0,0,0,0];
    }
}
