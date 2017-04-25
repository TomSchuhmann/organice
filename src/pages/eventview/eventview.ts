import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/angular2';
import { DeleteeventPage } from '../deleteevent/deleteevent';
import { EditeventPage } from '../editevent/editevent';
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

    public hostname: any;
    public description: any;
    public eventID: any;
    public data: string;
    public username: string;

    constructor(public navCtrl: NavController, public params: NavParams, public http: Http, public modalCtrl: ModalController) {
        this.hostname = params.get("hostname");
        this.eventID = params.get("eventID");
        this.username = "Tom S";
        console.log("ID here: " + this.eventID);
        this.loadevent();
    }

   
  
    loadevent() {
        //var eventID = this.eventID;
        var eventID = this.eventID;
        var creds = { eventID: eventID };
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post('http://www.orga-nicer.org/organice/selectspecificevents.php', creds, {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventviewPage');
  }
  deleteevent(eventID, eventdate, description, eventname, pictureid) {
      let modal = this.modalCtrl.create(DeleteeventPage, {
          eventID: eventID,
          eventdate: eventdate,
          eventname: eventname,
          description: description,
          pictureid: pictureid
          
      });
      modal.present();
      modal.onDidDismiss(() => {
          this.navCtrl.pop();
      });
  }

  editevent(eventID, eventdate, description, eventname, pictureid) {
      let modal = this.modalCtrl.create(EditeventPage, {
          eventID: eventID,
          eventdate: eventdate,
          eventname: eventname,
          description: description,
          pictureid: pictureid
          
      });
      modal.present();
      modal.onDidDismiss(() => {
          this.loadevent();
      });
  }

}
