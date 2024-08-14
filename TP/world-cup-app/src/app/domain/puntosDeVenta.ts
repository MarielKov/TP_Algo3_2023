import { Direccion } from "./Direccion"
import {Usuario} from "./usuario"

export class Pedido {
    constructor(public cantidadDeSobres: number, public fechaDeEntrega: Date) {}
  
    pedidoRecibido(): boolean {
      return new Date() > this.fechaDeEntrega;
    }
  }
  
export abstract class PuntoDeVenta  {
    id! : number 
    costoSobre: number = 170.0;
    pedidosPendientes: Pedido[] = [];
  
    constructor(public nombre: string, public direccion: Direccion, public stockDeSobres: number) {}
  
    hayDisponibilidad(): boolean {
      return this.stockDeSobres > 0;
    }
  
    abstract factorEspecial(cantidadDeSobres: number): number;
  
    costoMinimo(cantidadDeSobres: number, usuario: Usuario): number {
      return this.costoMenosDiezKM(cantidadDeSobres) + 100 * this.kilometrosDeExceso(usuario);
    }
  
    costoMenosDiezKM(cantidadDeSobres: number): number {
      return this.costoSobre * cantidadDeSobres + 1000;
    }
  
    kilometrosDeExceso(usuario: Usuario): number {
      if (this.envioSuperaDiezKm(usuario)) {
        return Math.ceil(this.distanciaEnvio(usuario) - 10);
      } else {
        return 0.0;
      }
    }
  
    envioSuperaDiezKm(usuario: Usuario): boolean {
      return this.distanciaEnvio(usuario) > 10;
    }
  
    distanciaEnvio(usuario: Usuario): number { 
        return 0
      //return this.direccion.distanciaEnKm(usuario.direccion);
    }
  
    tienePedidosARecibir(): boolean {
      const currentDate = new Date();
      for (const pedido of this.pedidosPendientes) {
        const deliveryDate = new Date(pedido.fechaDeEntrega);
        const differenceInDays = Math.floor((deliveryDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
        if (differenceInDays <= 90) {
          return true;
        }
      }
      return false;
    }
  
    esInactivo(): boolean {
      return !this.hayDisponibilidad() && !this.tienePedidosARecibir() && !this.tienePedidosSinRegistrar();
    }
  
    tienePedidosSinRegistrar(): boolean {
      return this.pedidosPendientes.some((pedido) => pedido.pedidoRecibido());
    }
  
    registrarPedidos() {
      this.pedidosAFabricaSinProcesar().forEach((pedido) => this.registrarPedido(pedido));
    }
  
    pedidosAFabricaSinProcesar(): Pedido[] {
      return this.pedidosPendientes.filter((pedido) => pedido.pedidoRecibido());
    }
  
    registrarPedido(pedido: Pedido) {
      this.aumentarStock(pedido.cantidadDeSobres);
      this.eliminarPedido(pedido);
    }
  
    aumentarStock(cantidadDeSobres: number) {
      this.stockDeSobres += cantidadDeSobres;
    }
  
    eliminarPedido(pedido: Pedido) {
      const index = this.pedidosPendientes.indexOf(pedido);
      if (index !== -1) {
        this.pedidosPendientes.splice(index, 1);
      }
    }
  
    agregarPedido(pedido: Pedido) {
      this.pedidosPendientes.push(pedido);
    }
  
    editarDatos(elemento: PuntoDeVenta): void {
      this.edicionBasica(elemento);
      this.edicionParticular(elemento);
    }
  
    abstract edicionParticular(elemento: PuntoDeVenta): void;
  
    private edicionBasica(elemento: PuntoDeVenta): void {
      this.nombre = elemento.nombre;
      this.direccion = elemento.direccion;
      this.stockDeSobres = elemento.stockDeSobres;
    }
  
    coincide(value: string): boolean {
      return this.nombre.toLowerCase() === value.toLowerCase();
    }
  
   // camposSonValidos(): boolean {
      //return this.nombre.trim() !== "" && this.direccion.esValida();
    //}
  }
  
export class Kiosco extends PuntoDeVenta {
    
    constructor(public atendidoPorSusPropiosDuenios: boolean, nombre: string, direccion: Direccion, stockDeSobres: number) {
      super(nombre, direccion, stockDeSobres);
    }
  
    factorEspecial(cantidadDeSobres: number): number {
      return this.atendidoPorSusPropiosDuenios ? 1.10 : 1.25;
    }
  
    edicionParticular(elemento: Kiosco): void {
      this.atendidoPorSusPropiosDuenios = elemento.atendidoPorSusPropiosDuenios;
    }
  }
  
export class Libreria extends PuntoDeVenta {
   
    constructor(nombre: string, direccion: Direccion, stockDeSobres: number) {
      super(nombre, direccion, stockDeSobres);
    }
  
    factorEspecial(cantidadDeSobres: number): number {
      return this.algunPedidoIngresaEnDiezDiasOMenos() ? 1.05 : 1.10;
    }
  
    edicionParticular(elemento: Libreria): void {}
  
    algunPedidoIngresaEnDiezDiasOMenos(): boolean {
      return this.pedidosPendientes.some((pedido) => this.pedidoIngresaEnDiezDiasOMenos(pedido));
    }
  
    pedidoIngresaEnDiezDiasOMenos(pedido: Pedido): boolean {
      const currentDate = new Date();
      const deliveryDate = new Date(pedido.fechaDeEntrega);
      const differenceInDays = Math.floor((deliveryDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
      return differenceInDays <= 10;
    }
  }
  
export class Supermercado extends PuntoDeVenta {

    constructor(public descuento: Descuentos, nombre: string, direccion: Direccion, stockDeSobres: number) {
      super(nombre, direccion, stockDeSobres);
    }
  
    factorEspecial(cantidadDeSobres: number): number {
      return 1 - this.descuento.aplicarDescuentos(cantidadDeSobres);
    }
  
    edicionParticular(elemento: Supermercado): void {}
  }
  

export interface Descuentos {
        aplicarDescuentos(cantidadDeSobres: number): number;
        factorDescuento(cantidadDeSobres: number): number;
        seAplicaDescuento(cantidadDeSobres: number): boolean;
      }
      
export class DescuentoDeJueves implements Descuentos {
        factorDescuento(cantidadDeSobres: number): number {
          return 0.1;
        }
      
        seAplicaDescuento(cantidadDeSobres: number): boolean {
          return this.esJueves();
        }
      
        esJueves(): boolean {
          const today = new Date();
          return today.getDay() === 4; // Jueves es el día 4 de la semana en JavaScript (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
        }
      
        aplicarDescuentos(cantidadDeSobres: number): number {
          return this.seAplicaDescuento(cantidadDeSobres) ? this.factorDescuento(cantidadDeSobres) : 0;
        }
      }

export class DescuentoUnoAlDiezDelMes implements Descuentos {
        factorDescuento(cantidadDeSobres: number): number {
          return 0.05;
        }
      
        seAplicaDescuento(cantidadDeSobres: number): boolean {
          return this.unoAlDiezDelMes();
        }
      
        unoAlDiezDelMes(): boolean {
          const today = new Date();
          const dayOfMonth = today.getDate();
          return dayOfMonth >= 1 && dayOfMonth <= 10;
        }
      
        aplicarDescuentos(cantidadDeSobres: number): number {
          return this.seAplicaDescuento(cantidadDeSobres) ? this.factorDescuento(cantidadDeSobres) : 0;
        }
      }
      
export class DependeTamanioCompra implements Descuentos {

        factorDescuento(cantidadDeSobres: number): number {
          return 0.45;
        }
      
        seAplicaDescuento(cantidadDeSobres: number): boolean {
          return cantidadDeSobres > 200;
        }
      
        aplicarDescuentos(cantidadDeSobres: number): number {
          return this.seAplicaDescuento(cantidadDeSobres) ? this.factorDescuento(cantidadDeSobres) : 0;
        }
      }
      
export class NoHacerDescuento implements Descuentos {
        factorDescuento(cantidadDeSobres: number): number {
          return 0.0;
        }
      
        seAplicaDescuento(cantidadDeSobres: number): boolean {
          return false;
        }
      
        aplicarDescuentos(cantidadDeSobres: number): number {
          return 0;
        }
      }
      
export class CombinatoriaDeDescuentos implements Descuentos {
        listaDeDescuentos: Descuentos[] = [];
      
        aplicarDescuentos(cantidadDeSobres: number): number {
          const descuentosAplicados = this.listaDeDescuentos
            .map((descuento) => descuento.aplicarDescuentos(cantidadDeSobres))
            .reduce((acc, val) => acc + val, 0);
      
          return Math.min(0.5, descuentosAplicados);
        }
      
        agregarDescuento(descuento: Descuentos): void {
          this.listaDeDescuentos.push(descuento);
        }
      
        quitarDescuento(descuento: Descuentos): void {
          const index = this.listaDeDescuentos.indexOf(descuento);
          if (index !== -1) {
            this.listaDeDescuentos.splice(index, 1);
          }
        }
      
        factorDescuento(cantidadDeSobres: number): number {
          return 0.0;
        }
      
        seAplicaDescuento(cantidadDeSobres: number): boolean {
          return true;
        }
      }