import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
  
})
export class FriendsPage {
  items;
  username: any;
  data: any;
  constructor(public http: Http, public navCtrl: NavController) {
      //this.initializeItems();
      
  }

  logError(err) {
      console.error('There was an error: ' + err);
  }

  ionViewWillEnter() {
      var user = "";
      var pw = "";
      this.username = "Tom S";
      var creds = { username: user, password: pw };
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post('http://www.orga-nicer.org/organice/selectfriends.php', creds, {
          headers: headers
      })
          .map(res => res.json().User) // extract object

          .subscribe(
          data => this.data = data.map(user => user.Name), // here! paste res into variable data
          err => this.logError(err),
          () => console.log('Completed')
          );


      this.items = this.data;
  }

  initializeItems() {
      var user = "";
      var pw = "";
      this.username = "Tom S";
      var creds = { username: user, password: pw };
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post('http://www.orga-nicer.org/organice/selectfriends.php', creds, {
          headers: headers
      })
          .map(res => res.json().User) // extract object

          .subscribe(
          data => this.data = data.map(user => user.Name), // here! paste res into variable data
          err => this.logError(err),
          () => console.log('Completed')
          );

      
      this.items = this.data;

      //console.log(JSON.stringify(this.data));
    //this.items = [
    //  'Amsterdam',
    //  'Bogota',
    //  'Buenos Aires',
    //  'Cairo',
    //  'Dhaka',
    //  'Edinburgh',
    //  'Geneva',
    //  'Genoa',
    //  'Glasglow',
    //  'Hanoi',
    //  'Hong Kong',
    //  'Islamabad',
    //  'Istanbul',
    //  'Jakarta',
    //  'Kiel',
    //  'Kyoto',
    //  'Le Havre',
    //  'Lebanon',
    //  'Lhasa',
    //  'Lima',
    //  'London',
    //  'Los Angeles',
    //  'Madrid',
    //  'Manila',
    //  'New York',
    //  'Olympia',
    //  'Oslo',
    //  'Panama City',
    //  'Peking',
    //  'Philadelphia',
    //  'San Francisco',
    //  'Seoul',
    //  'Taipeh',
    //  'Tel Aviv',
    //  'Tokio',
    //  'Uelzen',
    //  'Washington'
    //];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  gotoProfile(hostname) {
      this.navCtrl.push(ProfilePage, {
          hostname: hostname
      });
  }

  openChat(){
    //click auf chatbubble führt öffnet chat
  }
  

}