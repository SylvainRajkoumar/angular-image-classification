import { MlDemoBoardPage } from './app.po';

describe('ml-demo-board App', function() {
  let page: MlDemoBoardPage;

  beforeEach(() => {
    page = new MlDemoBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
