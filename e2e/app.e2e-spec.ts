import { AngularTodoListPage } from './app.po';

describe('angular-todo-list App', function() {
  let page: AngularTodoListPage;

  beforeEach(() => {
    page = new AngularTodoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
