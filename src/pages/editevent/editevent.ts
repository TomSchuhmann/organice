import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/angular2';
/*
  Generated class for the Editevent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-editevent',
  templateUrl: 'editevent.html'
})
export class EditeventPage {
    public eventID: any;
    data: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public http: Http) {
        this.eventID = navParams.get("eventID");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditeventPage');
  }
  delete() {
     

          var eventhostname = "Tom S";
          var eventname = String((<HTMLInputElement>document.getElementById('eventname')).value);
          var eventdate = String((<HTMLInputElement>document.getElementById('eventdate')).value);
          var eventdescription = String((<HTMLInputElement>document.getElementById('eventdescription')).value);
          var eventpicture = String((<HTMLInputElement>document.getElementById('eventpicture')).value);
        

          var creds = { eventid: this.eventID, eventname: eventname, eventdate: eventdate, eventdescription: eventdescription, eventpicture: eventpicture, eventhostname: eventhostname };

          var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          this.http.post('http://www.orga-nicer.org/organice/editevent.php', creds, {
              headers: headers
          })
              .map(res => res.json().Person) // extract object

              .subscribe(
              data => this.data = data, // here! paste res into variable data
              err => this.logError(err),
              () => console.log('Completed')
              );
         

      
      this.navCtrl.popAll();
  }

  keep() {
      this.viewCtrl.dismiss();
  }
  logError(err) {
      console.error('There was an error: ' + err);
  }

}
