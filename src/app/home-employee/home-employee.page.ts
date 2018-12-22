import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.page.html',
  styleUrls: ['./home-employee.page.scss'],
})
export class HomeEmployeePage implements OnInit {

  isLogined:boolean=false;

  constructor(
    private navCont:NavController,
    private auth:AuthService,
    private authFire:AngularFireAuth,
    private router:Router

  ){
    authFire.authState.subscribe(use=>{
      console.log(use)
      if(use!=null){
        this.isLogined=true;
      }
      else{
        this.isLogined=false;
      }
    })
  }

  ngOnInit() {
  }

  addOrder(){
    this.navCont.navigateRoot('addOrder')
  }

  updateOrder(){
    this.navCont.navigateRoot('updateOrder')
  }

  listOrder(){
    this.navCont.navigateRoot('listOrder')
  }

  logout(){
    this.auth.logout().subscribe(()=>{
      this.router.navigate(['/home'])
    })
  }
}
