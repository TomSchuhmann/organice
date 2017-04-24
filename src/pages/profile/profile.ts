import { Component } from '@angular/core';
import { Facebook, NativeStorage } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/angular2';
import { EventviewPage } from '../eventview/eventview';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
  
})
export class ProfilePage {

    public data: string;
    public hostname: any;
    constructor(public navCtrl: NavController, public params: NavParams, public http: Http) {
        this.hostname = params.get("hostname");
    }
  ionViewWillEnter() {
      var user = this.hostname; //aus native storage holen
      
      var creds = { HostName: user};
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post('http://www.orga-nicer.org/organice/selecteventsprofile.php', creds, {
          headers: headers
      })
          .map(res => res.json().Events) // extract object

          .subscribe(
          data => this.data = data, // here! paste res into variable data
          err => this.logError(err),
          () => console.log('Completed')
          );
  }
  logError(err) {
      console.error('There was an error: ' + err);
  }

  gotoEvent(hostname, eventID) {
      console.log("profile.ts eventID: " + eventID);
      this.navCtrl.push(EventviewPage, {
          hostname: hostname,
          eventID: eventID
      });
  }
}
