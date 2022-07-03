import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatTopupExchangePage } from './fiat-topup-exchange.page';

describe('FiatTopupExchangePage', () => {
  let component: FiatTopupExchangePage;
  let fixture: ComponentFixture<FiatTopupExchangePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatTopupExchangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatTopupExchangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
