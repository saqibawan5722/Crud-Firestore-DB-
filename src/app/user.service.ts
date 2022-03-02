import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private angularFirestore: AngularFirestore) {}


  // this is use for data create in database
  createUser(user: User) {
    return this.angularFirestore
        .collection("user-collection")
        .add(user)
        
    }
  

  // this is use for get data from database and show in table 
  getUserList() { 
    return this.angularFirestore
    .collection("user-collection")
    .snapshotChanges();
  }



  deleteUser(user) {
    return this.angularFirestore
      .collection("user-collection")
      .doc(user.id)
      .delete();
  }
  

  find(id) {
    return this.angularFirestore
    .collection('user-collection')
    .doc(id)
    .valueChanges()
  }



  updateUser(user:User, id) {
    return this.angularFirestore
      .collection("user-collection")
      .doc(id)
      .update({
        name: user.name,
        email: user.email,
        contact: user.contact
      });
  }
}
