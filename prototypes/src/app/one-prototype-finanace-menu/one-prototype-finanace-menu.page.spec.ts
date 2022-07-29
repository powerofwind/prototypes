import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnePrototypeFinanaceMenuPage } from './one-prototype-finanace-menu.page';

describe('OnePrototypeFinanaceMenuPage', () => {
  let component: OnePrototypeFinanaceMenuPage;
  let fixture: ComponentFixture<OnePrototypeFinanaceMenuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePrototypeFinanaceMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnePrototypeFinanaceMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
