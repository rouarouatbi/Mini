import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'; // firebase firestore service
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitorService {

  constructor(private fs : AngularFirestore) { }

  getAllUsers(){
    return this.fs.collection('users').snapshotChanges();
  }
}
