import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.page.html',
  styleUrls: ['./list-order.page.scss'],
})
export class ListOrderPage implements OnInit {
  id:string;
  constructor(
    private navCont:NavController
  ){
    // this.id = this.navParams.get('id')
  }

  ngOnInit() {
  }

  homeEmployee(){
    this.navCont.navigateRoot('homeEmployee')
  }
}