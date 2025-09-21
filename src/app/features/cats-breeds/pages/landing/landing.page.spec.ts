import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPage } from './landing.page';
import { IonicModule } from '@ionic/angular';
import { GetListCatsUseCase } from 'src/app/domain/usecases/list-cats.usecase';
import { CatRepository } from 'src/app/domain/repositories/cat.repository';

describe('LandingPage', () => {
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;

  beforeEach(async () => {
    const repo = jasmine.createSpyObj('CatRepository', ['getAllCats']);

    await TestBed.configureTestingModule({
      // 👇 standalone components en imports
      imports: [IonicModule.forRoot(), LandingPage],
      providers: [
        GetListCatsUseCase,
        { provide: CatRepository, useValue: repo }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter cats by name', async () => {
    component.cats = [
      { id: '1', name: 'Abyssinian', description: '' },
      { id: '2', name: 'Bengal', description: '' },
      { id: '3', name: 'Siamese', description: '' }
    ];
    component.filteredCats = [...component.cats];

    const event = { target: { value: 'ben' } };
    component.filterCats(event);
    
    expect(component.filteredCats.length).toBe(1);
    expect(component.filteredCats[0].name).toBe('Bengal');
  });
});
