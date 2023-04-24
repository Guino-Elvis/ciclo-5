import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexADminComponent } from './index-admin.component';

describe('IndexADminComponent', () => {
  let component: IndexADminComponent;
  let fixture: ComponentFixture<IndexADminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexADminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexADminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
