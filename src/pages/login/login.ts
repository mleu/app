import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Credential } from '../../models/credential';
import { ImsLoadingError } from '../../models/errors/ims-loading-error';
import { AuthService } from '../../providers/auth-service';
import { LoadingService } from '../../providers/loading-service';
import { SettingService } from '../../providers/setting-service';
import { EntriesPage } from '../entries/entries';
import { ImsAuthenticationError } from './../../models/errors/ims-authentication-error';
import { ImsServerConnectionError } from './../../models/errors/ims-server-connection-error';
import { Filter } from './../../models/filter';
import { SettingArchivePage } from './../setting-archive/setting-archive';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loginForm: FormGroup;
  public isShowRestUrlField: boolean = true;
  public version: string = '0.8.2';
  public readonly unauthorizedHttpStatusCode: number = 401;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public loadingService: LoadingService, public toastCtrl: ToastController, public authService: AuthService, public settingService: SettingService) {
    this.loginForm = this.formBuilder.group({
      server: ['', Validators.required],
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public login(): void {
    if (this.loginForm.invalid) {
      this.showToastMessage('Alle Felder müssen ausgefüllt werden');
    } else {
      const credential = this.createCredential();
      this.loadingService.subscribeWithLoading(this.authService.login(credential), info => this.loginSuccessful(), err => this.loginFailed(err));
    }
  }

  public loginSuccessful(): void {
    const credential: Credential = this.createCredential();
    this.settingService.setRestUrl(credential.server);
    this.settingService.setUsername(credential.username);
    this.settingService.getFilter(credential.server, credential.username).subscribe(filter => this.navigateAfterLogin(filter), err => { throw new ImsLoadingError('Archiv-Einstellungen', err); });
  }

  public createCredential(): Credential {
    const server = this.loginForm.controls.server.value;
    const user = this.loginForm.controls.user.value;
    const password = this.loginForm.controls.password.value;
    return new Credential(server, user, password);
  }

  public navigateAfterLogin(filter: Filter): void {
    if (filter !== undefined) {
      this.authService.setArchive(filter);
      this.navCtrl.setRoot(EntriesPage);
    } else {
      this.navCtrl.setRoot(SettingArchivePage);
    }
  }

  public loginFailed(response: Response): void {
    if (response.status === this.unauthorizedHttpStatusCode) {
      throw new ImsAuthenticationError(response);
    } else {
      throw new ImsServerConnectionError(this.loginForm.controls.server.value, response);
    }
  }

  public showToastMessage(toastMessage: string): void {
    const toast = this.toastCtrl.create({
      message: toastMessage,
      duration: 3000,
    });
    toast.present();
  }

  public ionViewDidLoad(): void {
    this.settingService.getRestUrl().subscribe(val => this.loginForm.controls.server.setValue(val));
    this.settingService.getUsername().subscribe(val => this.loginForm.controls.user.setValue(val));
    this.settingService.isShowRestUrlField().subscribe(val => this.isShowRestUrlField = val);
  }

}
