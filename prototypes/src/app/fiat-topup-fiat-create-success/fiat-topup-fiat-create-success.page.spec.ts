import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatTopupFiatCreateSuccessPage } from './fiat-topup-fiat-create-success.page';

describe('FiatTopupFiatCreateSuccessPage', () => {
  let component: FiatTopupFiatCreateSuccessPage;
  let fixture: ComponentFixture<FiatTopupFiatCreateSuccessPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatTopupFiatCreateSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatTopupFiatCreateSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
