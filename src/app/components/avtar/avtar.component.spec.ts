import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvtarComponent } from './avtar.component';

describe('AvtarComponent', () => {
  let component: AvtarComponent;
  let fixture: ComponentFixture<AvtarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvtarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
