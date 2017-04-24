import { IonicStorageModule } from '@ionic/storage';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MobileClient } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PopoverPage } from '../pages/popover/popover';
import { SettingsPage } from './../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TokenService } from '../providers/token-service';
import { UploadService } from '../providers/upload-service';
import { ImsService } from '../providers/ims-service';
import { AuthService } from '../providers/auth-service';
import { SettingService } from '../providers/setting-service';

import { Transfer } from '@ionic-native/transfer';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MobileClient,
    HomePage,
    LoginPage,
    PopoverPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MobileClient),
    IonicStorageModule.forRoot({
      name: 'imsClientDB',
      driverOrder: ['websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MobileClient,
    HomePage,
    LoginPage,
    PopoverPage,
    SettingsPage
  ],
  providers: [
    TokenService,
    UploadService,
    ImsService,
    AuthService,
    StatusBar,
    SplashScreen,
    Transfer,
    IonicStorageModule,
    Camera,
    SettingService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
