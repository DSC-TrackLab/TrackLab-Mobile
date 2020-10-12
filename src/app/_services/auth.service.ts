import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ResolveStart, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import  { Observable, of } from 'rxjs';
import { map,switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';



export interface User {
   uid: string;
  displayName:string;
  name:string;
  surname:string;
  phonenumber:string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<User>
  //newUser:any
role:string
  constructor(public db:AngularFirestore,public afAuth:AngularFireAuth,public router:Router,private snackbar:MatSnackBar) { 
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.newUser = user;
    //     localStorage.setItem('user', JSON.stringify(this.newUser));
    //     JSON.parse(localStorage.getItem('user'));
    //   } else {
    //     localStorage.setItem('user', null);
    //     JSON.parse(localStorage.getItem('user'));
    //   }
    // })
    this.user=this.afAuth.authState.pipe(
      switchMap(user =>{
        if(user){
          return this.db.doc<User>(`users/${user.uid}`).valueChanges();
        }else{
          return of(null)
        }
      })
    )
  }

  //user roles
RoleData(roles){
  this.role=roles
}
//display errors using snackbar
openSnackBar(message){
  this.snackbar.open(message)
}
  //login method
  login( email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['dashboard']);
        }
      }).catch(error => {
       
        this.openSnackBar(error.message)
      })
  }

  //get auth state
  getUserState(){
    return this.afAuth.authState
  }


//register user
async createUser(user){
  
  this.afAuth.createUserWithEmailAndPassword(user.email,user.password)
  .then(userCredential=>{
    const newUser={
      uid:userCredential.user.uid,
      displayName:`${user.name + " "+user.surname}`,
      name:user.name,
      surname:user.surname,
      phonenumber:user.phonenumber,
      role:this.role,
      email:userCredential.user.email,
    }

    console.log(newUser)
    console.log(userCredential)
    this.insertUserData(newUser)
    this.router.navigate(['login'])

  }).catch(error=>{
    this.openSnackBar(error.message)
   // this.router.navigate(['login'])
  })
}



// Reset Forgot password
ForgotPassword(passwordResetEmail) {
  return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
  .then(() => {
    //window.alert('Password reset email sent, check your inbox.');
    this.openSnackBar('Password reset email sent, check your inbox.')
  
  }).catch((error) => {
    this.openSnackBar(error.message)
  })
}



 async insertUserData(user) {
   try {
    const userRef: AngularFirestoreDocument<User> = this.db.doc(`users/${user.uid}`);
    const userData: User = {
       uid: user.uid,
      displayName:user.displayName,
      email: user.email,
      name: user.name,
      surname:user.surname,
      phonenumber:user.phonenumber,
      role:user.role,

    }
    console.log(userData);
    
    return  await userRef.set(userData, {
      merge: true
    })

   } catch (error) {
     console.log(error);
     
   }
    
  }

//   insertUserData(userCredential:firebase.auth.UserCredential){
//     return this.db.doc(`users/${userCredential.user.uid}`).set({
//       email:this.newUser.email,
//       fullname:this.newUser.fullname,
//       role:this.newUser.roles
//     })
//  }
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
HandleResetPassword(newPassword,code){
  
    this.afAuth.confirmPasswordReset(code, newPassword)
    .then(()=> {
      // Success
      this.router.navigate(['login'])
    })
    .catch((error) =>{
      // Invalid code
      this.openSnackBar(error.message)
    })
  
}

}
