import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { ViewChild } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/angular2';
/*
  Generated class for the Addeventview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addeventview',
  templateUrl: 'addeventview.html'
})
export class AddeventviewPage {
    data: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventviewPage');
  }
  createevent() {

      var eventhostname = "Tom S";
          var eventname = String((<HTMLInputElement>document.getElementById('eventname')).value);
          var eventdate = String((<HTMLInputElement>document.getElementById('eventdate')).value);
          var eventdescription = String((<HTMLInputElement>document.getElementById('eventdescription')).value);
          var eventpicture = String((<HTMLInputElement>document.getElementById('eventpicture')).value);

          var creds = { eventname: eventname, eventdate: eventdate, eventdescription: eventdescription, eventpicture: eventpicture, eventhostname: eventhostname };

          var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          this.http.post('http://www.orga-nicer.org/organice/createevent.php', creds, {
              headers: headers
          })
              .map(res => res.json().Person) // extract object

              .subscribe(
              data => this.data = data, // here! paste res into variable data
              err => this.logError(err),
              () => console.log('Completed')
              );
          this.navCtrl.pop();
      
  }
  logError(err) {
      console.error('There was an error: ' + err);
  }

}
