import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Eventview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eventview',
  templateUrl: 'eventview.html'
})
export class EventviewPage {

    public firstParam: any;
 
    constructor(public navCtrl: NavController, public params: NavParams) {
        this.firstParam = params.get("firstPassed");
        
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventviewPage');
  }

}
