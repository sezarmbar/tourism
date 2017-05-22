import { TourismusPage } from './app.po';

describe('tourismus App', () => {
  let page: TourismusPage;

  beforeEach(() => {
    page = new TourismusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tour works!');
  });
});
