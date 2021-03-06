import { inject, TestBed } from '@angular/core/testing';
import { AlertController } from 'ionic-angular';
import { AlertMock } from '../mocks/mocks';
import { AlertService } from './alert-service';

describe('Provider: AlertService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [AlertService, { provide: AlertController, useClass: AlertMock }],
      imports: []
    });
  });

  it('Should create error with correct attributes', inject([AlertService, AlertController], (alertService: AlertService, alertController: AlertController) => {
    const errorText = 'FAIL';
    spyOn(alertController, 'create').and.callThrough();
    alertService.showError(errorText);
    expect(alertController.create).toHaveBeenCalledWith({
      title: alertService.errorTitle,
      subTitle: errorText,
      buttons: [alertService.errorButtonText]
    });
  }));

});
