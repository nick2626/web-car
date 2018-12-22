import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {

  username:string;
  email:string;
  password:string;
  
  isLoading=false;
  constructor(
    private navCont:NavController,
    private auth:AuthService,
    private fire:AngularFireAuth,
    private route:Router
  ){
    fire.authState.subscribe(user=>{
      if(user==null){
        route.navigate(['/homeEmployee'])
      }
    })
  }

  ngOnInit() {
  }

  regiter(){
    var user={
      name:this.username,
      email:this.email,
      password:this.password
    }
    this.auth.reg(user).subscribe(data=>{
      console.log(data);
      this.isLoading=false
    },err=>{
      console.log(err);
      // if(err=='auth/email-already-in-use'){
      //   this.password="";
      //   this.email="";
      //   alert("อีเมลนี้ถูกใช้งานแล้ว")
      // }
      // this.isLoading=false;
    })
  }

  homeEmployee(){
    this.navCont.navigateRoot('homeEmployee')
  }

 login(){
    this.navCont.navigateRoot('login')
  }

  back(){
    this.navCont.goBack()
  }

}

