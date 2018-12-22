import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  constructor(
    private navCont:NavController
  ){

  }


  ngOnInit() {
  }

  home(){
    this.navCont.navigateRoot('home')
  }
}
