import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatTopupExchangeConfirmPage } from './fiat-topup-exchange-confirm.page';

describe('FiatTopupExchangeConfirmPage', () => {
  let component: FiatTopupExchangeConfirmPage;
  let fixture: ComponentFixture<FiatTopupExchangeConfirmPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatTopupExchangeConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatTopupExchangeConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
