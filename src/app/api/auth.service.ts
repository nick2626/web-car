import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user:firebase.User;
  constructor(
    private firebaseDB:AngularFireDatabase,
    private firebaseAuth:AngularFireAuth

  ) {
    firebaseAuth.authState.subscribe(user=>{
      this.user=user;
    })
   }

  testInsert(){
    return new Observable(observer=>{
      this.firebaseDB.database.ref('test')
      .push({name:"Narin"})
      .then(data=>{
        observer.next(data);
        observer.complete();
      },err=>{
        observer.error(err);
        observer.complete();
      })
    })
  }

  reg(userobj){
    return new Observable(observer=>{
      if(userobj.name!=null && userobj.email!=null && userobj.password!=null){
        this.firebaseAuth.auth.createUserWithEmailAndPassword(userobj.email,userobj.password)
        .then(data=>{
          this.firebaseDB.database.ref('user/'+data.user.uid)
          .set({name:userobj.name,
                email:userobj.email,
                password:userobj.password
              })
          .then(function(){
            observer.next();
            observer.complete();
          })
          .catch(function(err){
            observer.error(err);
            observer.complete();
          })

          
        })
        .catch(err=>{
          observer.error(err);
          observer.complete();
        })
      }else{
        observer.next();
        observer.complete();
      }
    })
  }

  login(userobj){
    return new Observable(observer=>{
      if(userobj.email!=null && userobj.password!=null){
        this.firebaseAuth.auth.signInWithEmailAndPassword(userobj.email,userobj.password)
        .then(user=>{
          observer.next(user);
          observer.complete();
        })
        .catch(err=>{
          observer.error(err.code);
          observer.complete();
        })
      }
    })
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  logout(){
    return new Observable(observer=>{
      this.firebaseAuth.auth.signOut()
      .then(user=>{
        observer.next();
        observer.complete();
      })
      .catch(err=>{
        observer.error(err.code);
        observer.complete();
      })
    })
  }


  addPackage(data){
    return new Observable(observer=>{
      const id=Date.now()
      this.firebaseDB.database.ref('package/'+id).set({provider:data.provider,ceiver:data.ceiver,id:id})
      .then(p=>{
        observer.next(id);
        observer.complete();
      })
      .catch(err=>{
        observer.error(err.code);
        observer.complete();
      })
    })
  }
}
