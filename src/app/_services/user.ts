export interface Roles {
   admin? :boolean,
   competitor? : boolean,
}

export interface User {
   uid: string;
   email: string;
   displayName: string;
   username: string;
   photoURL: string;
   emailVerified: boolean;
   roles: string;
   score: number;
}
