import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatWithdrawCryptoPage } from './fiat-withdraw-crypto.page';

describe('FiatWithdrawCryptoPage', () => {
  let component: FiatWithdrawCryptoPage;
  let fixture: ComponentFixture<FiatWithdrawCryptoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatWithdrawCryptoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatWithdrawCryptoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
