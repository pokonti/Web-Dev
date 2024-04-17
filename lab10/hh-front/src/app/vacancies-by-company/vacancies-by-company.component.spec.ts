import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesByCompanyComponent } from './vacancies-by-company.component';

describe('VacanciesByCompanyComponent', () => {
  let component: VacanciesByCompanyComponent;
  let fixture: ComponentFixture<VacanciesByCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacanciesByCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacanciesByCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
