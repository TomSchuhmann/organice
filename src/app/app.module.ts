import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { CalendarPage } from '../pages/calendar/calendar';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { ChatPage } from '../pages/chat/chat';
import { FriendsPage } from '../pages/friends/friends';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePickerModule } from 'datepicker-ionic2';

@NgModule({
  declarations: [
      MyApp,
      WelcomePage,
    HomePage,
	ChatPage,
	FriendsPage,
    CalendarPage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),IonicModule.forRoot(MyApp),DatePickerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      WelcomePage,
    HomePage,
    ChatPage,
	FriendsPage,
	CalendarPage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
