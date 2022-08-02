import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Coupon06topupdetailPage } from './coupon06topupdetail.page';

describe('Coupon06topupdetailPage', () => {
  let component: Coupon06topupdetailPage;
  let fixture: ComponentFixture<Coupon06topupdetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Coupon06topupdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Coupon06topupdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
