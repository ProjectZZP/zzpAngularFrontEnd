import { TinderappPage } from './app.po';

describe('tinderapp App', function() {
  let page: TinderappPage;

  beforeEach(() => {
    page = new TinderappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
