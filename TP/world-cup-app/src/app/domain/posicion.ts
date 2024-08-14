import { Jugador } from "./jugadores"

export interface Posicion {
    puntos: number;
    puntosExtras(jugador: Jugador): number
    condicionJugador(jugador: Jugador): boolean
    puntosPosicion(jugador: Jugador): number 
    valoracionDelJugador(jugador: Jugador) : number
}

