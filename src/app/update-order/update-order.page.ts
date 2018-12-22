import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.page.html',
  styleUrls: ['./update-order.page.scss'],
})
export class UpdateOrderPage implements OnInit {

  constructor(
    private navCont:NavController
  ){

  }

  ngOnInit() {
  }

  listOrder(){
    this.navCont.navigateRoot('listOrder')
  }

  homeEmployee(){
    this.navCont.navigateRoot('homeEmployee')
  }

}
