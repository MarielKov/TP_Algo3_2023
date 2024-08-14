import { differenceInYears } from "date-fns"
import { Seleccion } from "./seleccion"
import { Posicion } from "./posicion"

export class Jugador {
  constructor(
    public nombre: string,
    public apellido: string,
    public fechaDeNacimiento: Date,
    public nroCamistea : number,
    public seleccion: Seleccion,
    public anioDebut : Date,
    public altura: number,
    public peso: number,
    public posicion: string,
    public esLider: boolean,
    public cotizacionDelJugador: number
  ) {}

  edad (): number {
    return differenceInYears(new Date(), this.fechaDeNacimiento)
  }

}
