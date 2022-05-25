import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptionDialogNoSubmitPage } from './option-dialog-no-submit.page';

describe('OptionDialogNoSubmitPage', () => {
  let component: OptionDialogNoSubmitPage;
  let fixture: ComponentFixture<OptionDialogNoSubmitPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionDialogNoSubmitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionDialogNoSubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
