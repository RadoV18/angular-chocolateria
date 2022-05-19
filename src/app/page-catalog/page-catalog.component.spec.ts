import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogComponent } from './page-catalog.component';

describe('PageCatalogComponent', () => {
  let component: PageCatalogComponent;
  let fixture: ComponentFixture<PageCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
