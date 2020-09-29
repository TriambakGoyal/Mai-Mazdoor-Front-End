import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkTabPage } from './work-tab.page';

describe('WorkTabPage', () => {
  let component: WorkTabPage;
  let fixture: ComponentFixture<WorkTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
