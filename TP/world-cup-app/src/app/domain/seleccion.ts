export enum ConfederacionFutbol {
  Afc = "AFC",
  Caf = "CAF",
  Conmebol = "CONMEBOL",
  Concacaf= "CONCACAF",
  Ofc = "OFC",
  Uefa = "UEFA"
}

export class Confederacion {
  private copasConfederaciones: number = 0
  private selecciones: Array<Seleccion> = []
  constructor(public nombre: ConfederacionFutbol) {}

  // agregarSelecciones(seleccion: Seleccion) {
  //   this.selecciones.push(seleccion)
  //   seleccion.confederacion = this
  // }

  cantidadDeCopas(): number {
    return this.selecciones.reduce(
      (cantidadCopas, _seleccion) => cantidadCopas + _seleccion.copasDelMundo,
      0
    )
  }
}

export class Seleccion {
  constructor(
    public pais: string,
    public copasDelMundo: number,
    public confederacion: Confederacion
  ) {}

  // copasConfederacion(): number {
  //   return this.confederacion.cantidadDeCopas()
  // }

  // agregarCopasDelMundo(copas: number) {
  //   this.copasDelMundo += copas
  // }
}
