import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatTopupFiatPage } from './fiat-topup-fiat.page';

describe('FiatTopupFiatPage', () => {
  let component: FiatTopupFiatPage;
  let fixture: ComponentFixture<FiatTopupFiatPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatTopupFiatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatTopupFiatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
