import { Jugador } from './jugadores'

export class Figurita {
    id!: number
  constructor(
    public numeroFigus: number,
    public nivelDeImpresion: NivelDeImpresion,
    public onFire: boolean,
    public jugador: Jugador
  ) {}
}

export enum NivelDeImpresion {
  BAJO,
  MEDIO,
  ALTO
}
