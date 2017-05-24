import { browser, element, by, ElementFinder, $, promise, ExpectedConditions } from 'protractor';
import 'rxjs/add/observable/fromPromise';
import { Observable } from 'rxjs/Observable';
import { LoginPageOjbect } from './login-page-object';
import { EntriesPageObject } from './entries-page-object';

export class UploadPageObject {
    entriesPage = new EntriesPageObject();
    bildNameFieldInput: ElementFinder = element(by.css('input[ng-reflect-name=BILDNAME]'));
    uploadImageButton: ElementFinder = element(by.id('uploadImageButton'));
    memofeldFieldInput: ElementFinder = element(by.css('input[ng-reflect-name=MEMOFELD]'));
    textfeldFieldInput: ElementFinder = element(by.css('input[ng-reflect-name=TEXTFELD]'));
    integerfeldFieldInput: ElementFinder = element(by.css('input[ng-reflect-name=INTEGERFELD]'));
    floatfeldFieldInput: ElementFinder = element(by.css('input[ng-reflect-name=FLOATFELD]'));
    uploadFieldErrorDivBILDNAME: ElementFinder = element(by.id('uploadFieldErrorDivBILDNAME'));
    uploadFieldErrorDivINTEGERFELD: ElementFinder = element(by.id('uploadFieldErrorDivINTEGERFELD'));
    uploadFieldErrorDivFLOATFELD: ElementFinder = element(by.id('uploadFieldErrorDivFLOATFELD'));



    loadPage() {
        this.entriesPage.loadPage();
        this.entriesPage.pushEntriesCameraButtonOnEntry34617();
    }

    writeToTextField(textField: ElementFinder, text: string) {
        textField.clear();
        textField.sendKeys(text);
        browser.waitForAngular();
    }

    clickIntoBildNameTextField() {
        this.clickIntoTextField(this.bildNameFieldInput);
    }

    clickIntoIntegerTextField() {
        this.clickIntoTextField(this.integerfeldFieldInput);
    }

    clickIntoTextField(textField: ElementFinder) {
        textField.click();
        browser.waitForAngular();
    }

    verifyBildNameErrorDivVisible() {
        this.verifyErrorDivVisible(this.uploadFieldErrorDivBILDNAME);
    }

    verifyIntegerErrorDivVisible() {
        this.verifyErrorDivVisible(this.uploadFieldErrorDivINTEGERFELD);
    }

    verifyFloatErrorDivVisible() {
        this.verifyErrorDivVisible(this.uploadFieldErrorDivFLOATFELD);
    }

    verifyErrorDivVisible(errorDiv: ElementFinder) {
        browser.wait(ExpectedConditions.visibilityOf(errorDiv), 3 * 1000);
    }

    verifyBildNameErrorDivInvisible() {
        this.verifyErrorDivInvisible(this.uploadFieldErrorDivBILDNAME);
    }

    verifyIntegerErrorDivInvisible() {
        this.verifyErrorDivInvisible(this.uploadFieldErrorDivINTEGERFELD);
    }

    verifyFloatErrorDivInvisible() {
        this.verifyErrorDivInvisible(this.uploadFieldErrorDivFLOATFELD);
    }

    verifyErrorDivInvisible(errorDiv: ElementFinder) {
        browser.wait(ExpectedConditions.invisibilityOf(errorDiv), 3 * 1000);
    }

    clickUploadImageButton() {
        this.uploadImageButton.click();
    }
}
