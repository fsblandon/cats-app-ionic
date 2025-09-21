import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ItemCatComponent } from './item-cat.component';


describe('ItemCatComponent', () => {
  let component: ItemCatComponent;
  let fixture: ComponentFixture<ItemCatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ItemCatComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
