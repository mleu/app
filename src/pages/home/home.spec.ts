import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { HomePage } from './home';
import { App, Config, Form, IonicModule, Keyboard, DomController, LoadingController, NavController, Platform, NavParams, AlertController, ToastController, PopoverController } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { ImsService } from '../../providers/ims-service';
import { ConfigMock, PlatformMock, NavParamsMock, ToastMock, AppMock, AlertMock, LoadingMock, PopoverControllerMock } from '../../mocks/mocks';
import { Http, HttpModule, BaseRequestOptions } from '@angular/http';
import { MockImsBackend } from '../../mocks/mock-ims-backend';
import { Camera } from '@ionic-native/camera';
import { UploadService } from '../../providers/upload-service';
import { TokenService } from '../../providers/token-service';
import { MockUploadService } from '../../mocks/providers/mock-upload-service';

describe('Page: Home', () => {

  let fixture: ComponentFixture<HomePage> = null;
  let page: HomePage = null;

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [HomePage],

      providers: [
        App, DomController, Form, Keyboard, NavController, LoadingController, AlertController, AuthService, ImsService, TokenService, MockUploadService, MockImsBackend, BaseRequestOptions, Camera,
        { provide: App, useClass: AppMock },
        { provide: AlertController, useClass: AlertMock },
        { provide: Config, useClass: ConfigMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: NavParams, useClass: NavParamsMock },
        { provide: ToastController, useClass: ToastMock },
        { provide: LoadingController, useClass: LoadingMock },
        { provide: UploadService, useClass: MockUploadService },
        { provide: PopoverController, useClass: PopoverControllerMock },
        {
          provide: Http,
          useFactory: (MockImsBackend, options) => {
            return new Http(MockImsBackend, options);
          },
          deps: [MockImsBackend, BaseRequestOptions]
        },
      ],
      imports: [HttpModule, FormsModule, IonicModule, ReactiveFormsModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(HomePage);
      page = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('Show and Hide Loading while uploading', () => {
    spyOn(page, 'showLoading').and.callThrough();
    spyOn(page, 'hideLoading').and.callThrough();
    page.uploadPicture();
    expect(page.showLoading).toHaveBeenCalledTimes(1);
    expect(page.hideLoading).toHaveBeenCalledTimes(1);
  });

  it('Show Toast after successfull upload', inject([ToastController], (toastController: ToastController) => {
    spyOn(toastController, 'create').and.callThrough();
    page.uploadPicture();
    expect(toastController.create).toHaveBeenCalled();
  }));

  it('Show Error after failed upload', inject([AlertController, MockUploadService], (alertController: AlertController, mockUploadService: MockUploadService) => {
    spyOn(alertController, 'create').and.callThrough();
    spyOn(page, 'showAlert').and.callThrough();
    mockUploadService.mockError('Fail');
    page.uploadService = mockUploadService;
    page.uploadPicture();
    expect(alertController.create).toHaveBeenCalledTimes(1);
    expect(page.showAlert).toHaveBeenCalledTimes(1);
  }));

  it('Presents Popover', inject([PopoverController], (popoverController: PopoverController) => {
    spyOn(popoverController, 'create').and.callThrough();
    page.presentPopover(null);
    expect(popoverController.create).toHaveBeenCalled();
  }));

});