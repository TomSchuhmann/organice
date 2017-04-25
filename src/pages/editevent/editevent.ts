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

    public eventdate: any;
    public eventpicture: any;
    public eventdescription: any;
   public eventname: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public http: Http) {
        this.eventID = navParams.get("eventID");
        this.eventname = navParams.get("eventname");
        this.eventdate = navParams.get("eventdate");
        this.eventpicture = navParams.get("pictureid");
        this.eventdescription = navParams.get("description");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditeventPage');
  }
  delete() {
     

      var eventhostname = "Tom S";
      if (this.eventname == null || this.eventname == "") {
          var eventname = String((<HTMLInputElement>document.getElementById('eventname')).value);
      } 

      if (this.eventdate == null || this.eventdate == "") {
          var eventdate = String((<HTMLInputElement>document.getElementById('eventdate')).value);
      }

      if (this.eventpicture == null || this.eventpicture == "") {
          var eventpicture = String((<HTMLInputElement>document.getElementById('eventpicture')).value);
      } 

      if (this.eventdescription == null || this.eventdescription == "") {
          var eventdescription = String((<HTMLInputElement>document.getElementById('eventdescription')).value);
      } 
      
          
          
      eventname = String((<HTMLInputElement>document.getElementById('eventname')).value);
      eventdate = String((<HTMLInputElement>document.getElementById('eventdate')).value);
      eventpicture = String((<HTMLInputElement>document.getElementById('eventpicture')).value);
      eventdescription = String((<HTMLInputElement>document.getElementById('eventdescription')).value);

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
