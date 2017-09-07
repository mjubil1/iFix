import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { JobsPage } from "../pages/Jobs/Jobs";
import { SettingsPage } from "../pages/Settings/Settings";
import { StorePage } from "../pages/Store/Store";
import { LoginPage } from "../pages/login/login";
import { FrontPage } from "../pages/front/front";
import { SignUpPage } from "../pages/sign-up/sign-up";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    JobsPage,
    SettingsPage,
    StorePage,
    LoginPage,
    FrontPage,
    ForgotPasswordPage,
    SignUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    JobsPage,
    SettingsPage,
    StorePage,
    LoginPage,
    FrontPage,
    ForgotPasswordPage,
    SignUpPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
