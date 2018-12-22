import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor(
      private navCont:NavController
    ){

    }

    follow(){
      this.navCont.navigateRoot('follow')
    }

    format(){
      this.navCont.navigateRoot('format')
    }

    table(){
      this.navCont.navigateRoot('table')
    }

    reg(){
      this.navCont.navigateRoot('reg')
    }
}
