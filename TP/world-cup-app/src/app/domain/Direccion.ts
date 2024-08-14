//como mandamos la coordenadas en typescript, existe una libreria de 3ero para eso
export class Direccion{
    constructor (public provincia : string,
        public localidad : string,
        public calle: string,
        public altura: number,
        ){}
}