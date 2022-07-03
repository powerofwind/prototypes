import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatTopupCryptoPage } from './fiat-topup-crypto.page';

describe('FiatTopupCryptoPage', () => {
  let component: FiatTopupCryptoPage;
  let fixture: ComponentFixture<FiatTopupCryptoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatTopupCryptoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatTopupCryptoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
