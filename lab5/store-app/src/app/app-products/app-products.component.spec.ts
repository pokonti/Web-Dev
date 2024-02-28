import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductsComponent } from './app-products.component';

describe('AppProductsComponent', () => {
  let component: AppProductsComponent;
  let fixture: ComponentFixture<AppProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
