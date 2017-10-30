import { ReviewAnyPage } from './app.po';

describe('review-any App', function() {
  let page: ReviewAnyPage;

  beforeEach(() => {
    page = new ReviewAnyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
