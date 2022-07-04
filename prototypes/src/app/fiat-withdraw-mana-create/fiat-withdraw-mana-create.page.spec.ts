import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiatWithdrawManaCreatePage } from './fiat-withdraw-mana-create.page';

describe('FiatWithdrawManaCreatePage', () => {
  let component: FiatWithdrawManaCreatePage;
  let fixture: ComponentFixture<FiatWithdrawManaCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiatWithdrawManaCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiatWithdrawManaCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
