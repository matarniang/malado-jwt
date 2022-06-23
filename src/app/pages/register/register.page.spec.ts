import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LoginAdPage } from './register.page';

describe('LoginAdPage', () => {
  let component: LoginAdPage;
  let fixture: ComponentFixture<LoginAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
