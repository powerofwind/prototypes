import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatWithdrawExchangePage } from './fiat-withdraw-exchange.page';

describe('FiatWithdrawExchangePage', () => {
  let component: FiatWithdrawExchangePage;
  let fixture: ComponentFixture<FiatWithdrawExchangePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatWithdrawExchangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatWithdrawExchangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
