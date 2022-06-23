import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginAd1Page } from './finishregister.page';

describe('LoginAd1Page', () => {
  let component: LoginAd1Page;
  let fixture: ComponentFixture<LoginAd1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAd1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginAd1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
