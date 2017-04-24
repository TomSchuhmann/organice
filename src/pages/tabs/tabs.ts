import { Component } from '@angular/core';

//import { WelcomePage } from '../welcome/welcome';
//import { ProfilePage } from '../profile/profile';
import { CalendarPage } from '../calendar/calendar';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { FriendsPage } from '../friends/friends';
import { NavController } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  //tab1Root: any = WelcomePage;
  //tab2Root: any = ProfilePage;
  tab3Root: any = CalendarPage;
  tab4Root: any = HomePage;
  tab5Root: any = SettingsPage;
  tab6Root: any = FriendsPage;

  constructor(public navCtrl: NavController) {
      
  }

  ionViewDidEnter(){
      this.navCtrl.parent.select(0);  
  }

 
}
