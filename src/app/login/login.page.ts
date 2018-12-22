import { Component, OnInit } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;
  constructor(
    private navCont:NavController,
    private auth:AuthService,
    private rout:Router
  ){

  }

  ngOnInit() {
  }

  homeEmployee(){
    this.navCont.navigateRoot('homeEmployee')
  }

  home(){
    this.navCont.navigateRoot('home')
  }

  reg(){
    this.navCont.navigateRoot('reg')
  }

  login(){
    this.auth.login({email:this.email,password:this.password}).subscribe(data=>{
      this.navCont.navigateRoot('homeEmployee')
    },err=>{
      console.log(err);
    })
  }
}