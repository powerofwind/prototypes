import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatTopupQrCreateSuccessPage } from './fiat-topup-qr-create-success.page';

describe('FiatTopupQrCreateSuccessPage', () => {
  let component: FiatTopupQrCreateSuccessPage;
  let fixture: ComponentFixture<FiatTopupQrCreateSuccessPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatTopupQrCreateSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatTopupQrCreateSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
