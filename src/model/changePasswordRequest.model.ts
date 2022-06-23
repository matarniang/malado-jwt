export interface Interface {
    email?: string | null;
    newPassword?: string | null;
    key?: string | null;

  }
  
  export class changePasswordRequest implements Interface {
    constructor(
      public email?: string | null,
      public newPassword?: string | null,
      public key?: string | null
    ) {}
  }