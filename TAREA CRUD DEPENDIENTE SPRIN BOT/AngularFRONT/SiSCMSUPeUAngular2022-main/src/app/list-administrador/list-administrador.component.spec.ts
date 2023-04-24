import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdministradorComponent } from './list-administrador.component';

describe('ListAdministradorComponent', () => {
  let component: ListAdministradorComponent;
  let fixture: ComponentFixture<ListAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
