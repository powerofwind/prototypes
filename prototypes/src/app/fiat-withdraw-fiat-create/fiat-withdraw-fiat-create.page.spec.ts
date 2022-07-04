import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatWithdrawFiatCreatePage } from './fiat-withdraw-fiat-create.page';

describe('FiatWithdrawFiatCreatePage', () => {
  let component: FiatWithdrawFiatCreatePage;
  let fixture: ComponentFixture<FiatWithdrawFiatCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatWithdrawFiatCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatWithdrawFiatCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
