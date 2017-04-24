import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Deleteevent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-deleteevent',
  templateUrl: 'deleteevent.html'
})
export class DeleteeventPage {
    public eventID: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
        this.eventID = navParams.get("eventID");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteeventPage');
  }

  delete() {
      this.viewCtrl.dismiss();
  
  }

  keep() {
      this.viewCtrl.dismiss();
  }
}
