import { Injectable,NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user';

import 'firebase/auth';
import firebase from 'firebase/app' ; // firebase provider
import { AngularFireAuth } from "@angular/fire/auth"; // firebase auth service
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'; // firebase firestore service

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any; 
  userData1: User;
  id:any;
  user$: Observable<User>;

  constructor(public afs: AngularFirestore, 
              public afAuth: AngularFireAuth, 
              public router: Router,  
              public ngZone: NgZone /* NgZone service to remove outside scope warning */)
  {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        
       // console.log("get user with id from firestore ::",this.afs.collection(`users/${this.id}`).snapshotChanges()); 

        //this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });

     this.user$=this.afAuth.authState.pipe(
       switchMap(user=>{
         if(user){
       //    this.afs.doc<User>(`users/${user.uid}`).valueChanges()
       console.log(user);
         }else{
           return of(null);
         }
       })
     );
   
 }
 


  async googleSignIn(){
    const provider =  new firebase.auth.GoogleAuthProvider();
    const credential = await firebase.auth().signInWithPopup(provider);
    console.log("user after signIn credential.user == ",credential.user);
  }

        
  // Sign in with email/password
  SignIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
          console.log("result: ", result)
        });        
        console.log("in the signIn methode using mail and password ",localStorage.getItem('user'));
      //  console.log("user.role",this.userData.roles);

      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Sign Up with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  // Sign up with email/password
  SignUp(email, password , username) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(" Result.User : ",result.user);
        console.log('username', username);
        console.log(" Result.User.uid : ",result.user.uid);
        console.log(" Result.User.email : ",result.user.email);
        this.addUser(result.user.uid, result.user , username ) ; 
        this.SendVerificationMail();
      }).catch((error) => {
        window.alert(error.message)
      })
  }
  async addUser(uid: string, data: any, username: string) {
    const docRef= this.afs.collection('users').doc(uid);
  
    const userData: User = {
      uid: data.uid,
      email: data.email,
      displayName: data.displayName,
      photoURL: data.photoURL,
      emailVerified: data.emailVerified,
      username: username,
      roles: "competitor",
      score : 0,
    }
    setTimeout(() => {
      this.afs.collection('users').add(userData);
    }, 3500);
   
  }

  SendVerificationMail() {
    return firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return firebase.auth().sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false ) ? true : false;
  }

  
  create(uid, data){
    this.afs.collection(`users`).add(data);
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return firebase.auth().signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })    
    }).catch((error) => {
      window.alert(error)
    })
  }

  

  getUserData(){
    return this.user$;
  }

  // Sign out 
  SignOut() {
    return firebase.auth().signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/']);
    })
  }



}
