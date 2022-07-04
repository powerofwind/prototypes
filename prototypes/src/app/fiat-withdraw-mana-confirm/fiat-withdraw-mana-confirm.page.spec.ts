import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatWithdrawManaConfirmPage } from './fiat-withdraw-mana-confirm.page';

describe('FiatWithdrawManaConfirmPage', () => {
  let component: FiatWithdrawManaConfirmPage;
  let fixture: ComponentFixture<FiatWithdrawManaConfirmPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatWithdrawManaConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatWithdrawManaConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
