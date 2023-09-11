
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeeComponent } from './add-employeee.component';

describe('AddEmployeeeComponent', () => {
  let component: AddEmployeeeComponent;
  let fixture: ComponentFixture<AddEmployeeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeeComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
