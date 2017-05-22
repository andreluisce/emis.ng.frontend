import { Emis.Ng.FrontendPage } from './app.po';

describe('emis.ng.frontend App', () => {
  let page: Emis.Ng.FrontendPage;

  beforeEach(() => {
    page = new Emis.Ng.FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
