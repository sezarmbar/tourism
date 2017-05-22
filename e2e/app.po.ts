import { browser, element, by } from 'protractor';

export class TourismusPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tour-root h1')).getText();
  }
}
