import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCatComponent } from './list-cat.component';

describe('ListCatComponent', () => {
  let component: ListCatComponent;
  let fixture: ComponentFixture<ListCatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ListCatComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
