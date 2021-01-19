export interface Roles {
   admin? :boolean,
   competitor? : boolean,
}

export interface User {
   uid: string;
   username: string;
   email: string;
   displayName: string;
   photoURL: string;
   emailVerified: boolean;
   roles: string;
   score: number;
}
