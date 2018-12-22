import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-format',
  templateUrl: './format.page.html',
  styleUrls: ['./format.page.scss'],
})
export class FormatPage implements OnInit {

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