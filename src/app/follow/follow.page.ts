import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.page.html',
  styleUrls: ['./follow.page.scss'],
})
export class FollowPage implements OnInit {

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
