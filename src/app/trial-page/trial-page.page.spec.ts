import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrialPagePage } from './trial-page.page';

describe('TrialPagePage', () => {
  let component: TrialPagePage;
  let fixture: ComponentFixture<TrialPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrialPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
