import { TodoTestModule } from './todo-test.module';

describe('TodoTestModule', () => {
  let todoTestModule: TodoTestModule;

  beforeEach(() => {
    todoTestModule = new TodoTestModule();
  });

  it('should create an instance', () => {
    expect(todoTestModule).toBeTruthy();
  });
});
