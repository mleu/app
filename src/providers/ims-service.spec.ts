import { TestBed, inject, async } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions } from '@angular/http';
import { ImsService } from './ims-service';
import { MockImsBackend } from '../mocks/mock-ims-backend';

describe('Provider: ImsService', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [],

      providers: [
        ImsService,
        MockImsBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [MockImsBackend, BaseRequestOptions]
        }
      ],
      imports: [HttpModule]
    }).compileComponents();
  }));


  it('Ims Version', inject([ImsService, MockImsBackend], (imsService: ImsService, mockImsBackend: MockImsBackend) => {
    imsService.getInfo(mockImsBackend.credential).subscribe(
      info => expect(info.version).toEqual(mockImsBackend.version),
      err => fail(err));
  }));

  it('Should get link to license resource', inject([ImsService, MockImsBackend], (imsService: ImsService, mockImsBackend: MockImsBackend) => {
    imsService.getEntryPointLink(mockImsBackend.credential, 'license').subscribe(
      entryPoint => expect(entryPoint).toEqual(mockImsBackend.licenseUrl),
      err => fail(err));
  }));

  it('Should get link to entries resource', inject([ImsService, MockImsBackend], (imsService: ImsService, mockImsBackend: MockImsBackend) => {
    imsService.getEntryPointLink(mockImsBackend.credential, 'entries').subscribe(
      entryPoint => expect(entryPoint).toEqual(mockImsBackend.entriesUrl),
      err => fail(err));
  }));

  it('Should get link to token resource', inject([ImsService, MockImsBackend], (imsService: ImsService, mockImsBackend: MockImsBackend) => {
    imsService.getTokensUrl(mockImsBackend.credential).subscribe(
      link => expect(link).toEqual(mockImsBackend.tokensUrl),
      err => fail(err)
    );
  }));

  it('Should get link to filter resource', inject([ImsService, MockImsBackend], (imsService: ImsService, mockImsBackend: MockImsBackend) => {
    imsService.getEntriesFilterUrl(mockImsBackend.credential, mockImsBackend.filterId).subscribe(
      link => expect(link).toEqual(mockImsBackend.filterResourceUrl),
      err => fail(err)
    );
  }));

  it('Should get an upload link', inject([ImsService, MockImsBackend], (imsService: ImsService, mockImsBackend: MockImsBackend) => {
    imsService.getUploadsLink(mockImsBackend.credential, mockImsBackend.filterId, mockImsBackend.token).subscribe(
      url => expect(url).toEqual(mockImsBackend.containerRequestUrl),
      err => fail(err)
    );
  }));

  it('Should get parent image entries link', inject([ImsService, MockImsBackend], (imsService: ImsService, mockImsBackend: MockImsBackend) => {
    imsService.getParentImageEntriesLink(mockImsBackend.credential, mockImsBackend.filterId, mockImsBackend.token).subscribe(
      url => expect(url).toEqual(mockImsBackend.parentImageEntriesUrl),
      err => fail(err)
    );
  }));
});
