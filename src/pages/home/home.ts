
import { Component } from '@angular/core';
import { Facebook, NativeStorage } from 'ionic-native';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/angular2';
import { EventviewPage } from '../eventview/eventview';
import { AddeventviewPage } from '../addeventview/addeventview';
import { ProfilePage } from '../profile/profile';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public data: string;
    public username: any;
    public firstpassed: any;
    constructor(public navCtrl: NavController, public http: Http) {
       
    }
    ionViewWillEnter() {
        var user = "";
        var pw = "";
        this.username = "Tom S";
        var creds = { username: user, password: pw };
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post('http://www.orga-nicer.org/organice/selectevents.php', creds, {
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
        this.navCtrl.push(EventviewPage, {
            hostname: hostname,
            eventID: eventID
                                });
    }

    gotoCreateEvent() {
        this.navCtrl.push(AddeventviewPage);
    }
    gotoProfile(hostname) {
        this.navCtrl.push(ProfilePage, {
            hostname: hostname
        });
    }
}
