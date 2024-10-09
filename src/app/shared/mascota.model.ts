export class MascotaModel{
    constructor(
        public id: string,
        public nombre:string, 
        public edad:string, 
        public tamano:string, 
        public info:string, 
        public estado_adopcion: boolean,
        public imagen_url: string){}
  }