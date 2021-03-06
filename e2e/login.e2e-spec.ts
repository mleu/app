import { Helpers } from './helpers/helpers';
import { LoginPageObject } from './page-objects/login-page-object';

const loginPage = new LoginPageObject();

describe('Login E2E Test', () => {

  let originalTimeout;

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = Helpers.JASMINE_TIMEOUT_INTERVAL;
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  beforeEach(() => {
    loginPage.loadPage();
  });

  it('Toast Message appears with failed login attempt', () => {
    loginPage.clickLoginButton();
    loginPage.verifyToastErrorMessage();
  });

  it('Error Dialog appears with failed login attempt', () => {
    loginPage.loginWithCredentials('admin', 'WRONG_PASSWORD');
    loginPage.verifyErrorDialog();
  });

});
