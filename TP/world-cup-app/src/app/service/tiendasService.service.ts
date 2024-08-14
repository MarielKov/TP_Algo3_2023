import { Injectable } from '@angular/core';
import { PuntoDeVenta, Supermercado, Kiosco, Libreria, Descuentos, DescuentoDeJueves, DescuentoUnoAlDiezDelMes, DependeTamanioCompra, NoHacerDescuento, CombinatoriaDeDescuentos } from '../domain/puntosDeVenta';
import { Direccion } from "../domain/Direccion"

@Injectable({
  providedIn: 'root'
})

export class TiendasService {
    id : number
    tiendas : PuntoDeVenta[]

    constructor() { 
    this.id = 1
    this.tiendas = []
    }

    crearSupermercado(nombre : string ,direccion: Direccion , stockDeSobres: number, descuentos : Descuentos) {
        const supermercado = new Supermercado(descuentos,nombre ,direccion, stockDeSobres)
        supermercado.id = this.id++
        return supermercado
    }

    crearKiosco(nombre : string ,direccion: Direccion , stockDeSobres: number, atendidoPorSusPropiosDuenios: boolean) {
        const kiosco = new Kiosco(atendidoPorSusPropiosDuenios ,nombre,direccion, stockDeSobres)
        kiosco.id = this.id++
        return kiosco
        }

    crearLibreria(nombre : string ,direccion: Direccion , stockDeSobres: number) {
        const libreria = new Libreria(nombre ,direccion, stockDeSobres)
        libreria.id = this.id++
        return libreria
        }
            
}

export class StubsTiendasService extends TiendasService{
  constructor() {
    super();
    this.tiendas = [
      this.crearLibreria("Carlos", new Direccion("Buenos Aires", "San Martin", "Necochea",2345),30),
      this.crearSupermercado("Dia", new Direccion("Chubut", "Rawson", "Av. Marquez",1234),32, new DescuentoDeJueves),
      this.crearKiosco("Pascuzzi", new Direccion("Mendoza", "Bariloche", "Obarrio",6789), 46 , true)]
    }

}