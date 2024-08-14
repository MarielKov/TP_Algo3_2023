import { Injectable } from '@angular/core';
import { Figurita, NivelDeImpresion } from '../domain/figurita';
import { Jugador } from '../domain/jugadores';
import { Confederacion, ConfederacionFutbol, Seleccion } from '../domain/seleccion';

@Injectable({
  providedIn: 'root'
})
export class FiguritasServiceService {
figurita_id : number
figuritas : Figurita[]
constructor() { 
  this.figurita_id = 1
  this.figuritas = []
}

crearFigus(numero: number,nivelDeImpresion: NivelDeImpresion ,onFire : boolean ,jugador : Jugador) {
  const figus= new Figurita(numero, nivelDeImpresion, onFire, jugador)
  figus.id = this.figurita_id++
  return figus
}

}

export class StubsFiguritaService extends FiguritasServiceService{
  constructor() {
    super();
    this.figuritas = [
      this.crearFigus(5, NivelDeImpresion.ALTO ,false, new Jugador ("Lionel", "Messi", new Date(1987,6,24), 10, new Seleccion("Argentina", 3, new Confederacion( ConfederacionFutbol.Conmebol)),new Date (2004), 1.75, 70, "Delantero", true, 4000000)),
      this.crearFigus(1, NivelDeImpresion.BAJO ,false, new Jugador ("Guillermo", "Ochoa", new Date(1987,6,24), 1, new Seleccion("Argentina", 1, new Confederacion( ConfederacionFutbol.Concacaf)),new Date (2005), 1.85, 75, "Arquero", false, 200000)),
      this.crearFigus(5, NivelDeImpresion.MEDIO ,true, new Jugador ("Romelu", "Lukaku", new Date(1995,5,13), 9, new Seleccion("Belgica", 0, new Confederacion( ConfederacionFutbol.Uefa)),new Date (2015), 1.90, 90, "Delantero", false, 4500000))
  ]}

}

