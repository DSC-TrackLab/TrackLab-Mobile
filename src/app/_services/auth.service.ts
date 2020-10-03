import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  newUser:any

  constructor(public db:AngularFirestore,public afAuth:AngularFireAuth,public router:Router) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.newUser = user;
        localStorage.setItem('user', JSON.stringify(this.newUser));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  
  login( email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error.message)
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['dashboard']);
        }
      })
  }
  getUserState(){
    return this.afAuth.authState
  }

createUser(user){
  // const {email,password,fullname}=user;
  this.afAuth.createUserWithEmailAndPassword(user.email,user.password)
  .then(userCredential=>{
    this.newUser=user;
    userCredential.user.updateProfile({
      displayName:user.fullname 
    });

    this.insertUserData(userCredential)
    this.router.navigate(['login'])

  }).catch(err=>{
    console.log(err.message)
    this.router.navigate(['login'])
  })
}

// Reset Forggot password
ForgotPassword(passwordResetEmail) {
  return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    window.alert('Password reset email sent, check your inbox.');
   setTimeout(()=>{
     this.router.navigate[('login')];
   },5000)
  }).catch((error) => {
    window.alert(error)
  })
}

  // SetUserData(user) {
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.fullName,
  //     fullName: user.fullName,
  //     emailVerified: user.emailVerified,
  //     UserType:user.UserType,

  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }
  insertUserData(userCredential:firebase.auth.UserCredential){
    return this.db.doc(`users/${userCredential.user.uid}`).set({
      email:this.newUser.email,
      fullname:this.newUser.fullname,
      role:this.newUser.roles
    })
 }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null ) ? true : false;
  }
  
// Sign out 
logout() {
  return this.afAuth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  })
}


}
