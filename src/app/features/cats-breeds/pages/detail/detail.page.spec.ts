import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPage } from './detail.page';
import { IonicModule } from '@ionic/angular';
import { GetCatDetailUseCase } from 'src/app/domain/usecases/get-cat-detail.usecase';
import { CatRepository } from 'src/app/domain/repositories/cat.repository';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetailPage', () => {
  let component: DetailPage;
  let fixture: ComponentFixture<DetailPage>;

  beforeEach(async () => {
    const repo = jasmine.createSpyObj('CatRepository', ['getCatDetail']);
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), DetailPage],
      providers: [
        GetCatDetailUseCase,
        { provide: CatRepository, useValue: repo},
        { provide: ActivatedRoute,
          useValue: {
            // 👇 lo que usaría tu página para obtener params
            paramMap: of({
              get: (key: string) => key === 'id' ? '1' : null
            })
          }}
      ]
    })
    .compileComponents(); 

    fixture = TestBed.createComponent(DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
