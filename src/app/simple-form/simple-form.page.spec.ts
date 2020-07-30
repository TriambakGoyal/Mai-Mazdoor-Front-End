import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SimpleFormPage } from './simple-form.page';

describe('SimpleFormPage', () => {
  let component: SimpleFormPage;
  let fixture: ComponentFixture<SimpleFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
