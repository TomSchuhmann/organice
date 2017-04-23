import { Component } from '@angular/core';
import { Facebook, NativeStorage } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/angular2';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
  
})
export class ProfilePage {

    public data: string;
   
    constructor(public navCtrl: NavController, public http: Http) {

    }
  ionViewWillEnter() {
      var user = "";
      
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
}
