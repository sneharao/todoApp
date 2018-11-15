import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoTestModule } from 'src/app/todo-test/todo-test.module';
import { ListComponent } from '../list/list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListComponent
      ],
      imports:[
        TodoTestModule
      ]

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Todoapp');
  }));
  // it('should render title in a title tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('title').textContent).toContain('Welcome to todoApp!');
  // }));
});
