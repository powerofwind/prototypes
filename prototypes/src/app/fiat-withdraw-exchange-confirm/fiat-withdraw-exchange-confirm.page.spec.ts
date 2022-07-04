import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatWithdrawExchangeConfirmPage } from './fiat-withdraw-exchange-confirm.page';

describe('FiatWithdrawExchangeConfirmPage', () => {
  let component: FiatWithdrawExchangeConfirmPage;
  let fixture: ComponentFixture<FiatWithdrawExchangeConfirmPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatWithdrawExchangeConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatWithdrawExchangeConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
