import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatWithdrawFiatCreateSuccessPage } from './fiat-withdraw-fiat-create-success.page';

describe('FiatWithdrawFiatCreateSuccessPage', () => {
  let component: FiatWithdrawFiatCreateSuccessPage;
  let fixture: ComponentFixture<FiatWithdrawFiatCreateSuccessPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatWithdrawFiatCreateSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatWithdrawFiatCreateSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
