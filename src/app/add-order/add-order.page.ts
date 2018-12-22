import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.page.html',
  styleUrls: ['./add-order.page.scss'],
})
export class AddOrderPage implements OnInit {

  provider:string="";
  ceiver:string="";
  constructor(
    private navCont:NavController,
    private aut:AuthService,
    private rut:Router
  ){

  }

  ngOnInit() {
  }

  listOrder(){
    this.aut.addPackage({provider:this.provider,ceiver:this.ceiver}).subscribe(pack=>{
      console.log(pack)
      this.rut.navigate(['/listOrder',{id:pack}]);
    })
    // this.navCont.navigateRoot('listOrder')
  }

  homeEmployee(){
    this.navCont.navigateRoot('homeEmployee')
  }
}