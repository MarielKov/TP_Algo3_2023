import { Direccion } from "./Direccion"

export class Usuario {
    constructor (
        public username: string,
        public password: string,
        public nombre : string,
        public apellido : string,
        public fechaNacimiento: Date,
        public email: string,
        public coordenadas: Direccion,
        public distanciaMaxima : number
    ){

    }
}