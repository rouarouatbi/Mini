export interface Roles { 
   competitor?: boolean;
   admin?: boolean;
}
export interface User {
   uid: string;
   username: string;
   email: string;
   displayName: string;
   photoURL: string;
   emailVerified: boolean;
   roles: Roles;
   score: Number;
}
