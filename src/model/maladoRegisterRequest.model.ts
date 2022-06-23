export interface ImaladoRegisterRequest{
    login?:string;
    password?:string;
    firstName?:string;
    lastName?:string;
    email?:string;
    langKey?:string;
}

export class maladoRegisterRequest implements ImaladoRegisterRequest {
   constructor(
   public login?:string,
   public email?:string,
   public password?:string,
   public firstName?:string,
   public lastName?:string,
   public langKey?:string,
   ){}
}