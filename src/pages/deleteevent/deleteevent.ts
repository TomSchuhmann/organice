import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers } from '@angular/http';
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
    data: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public http: Http) {
        this.eventID = navParams.get("eventID");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeleteeventPage');
  }

  delete() {
      var creds = { eventid: this.eventID };

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post('http://www.orga-nicer.org/organice/deleteevent.php', creds, {
          headers: headers
      })
          .map(res => res.json().Person) // extract object

          .subscribe(
          data => this.data = data, // here! paste res into variable data
          err => this.logError(err),
          () => console.log('Completed')
          );

  
      this.viewCtrl.dismiss();
  
  }

  logError(err) {
      console.error('There was an error: ' + err);
  }

  keep() {
      this.viewCtrl.dismiss();
  }
}
