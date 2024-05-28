import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInsertDialogComponent } from './test-insert-dialog.component';

describe('TestInsertDialogComponent', () => {
  let component: TestInsertDialogComponent;
  let fixture: ComponentFixture<TestInsertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestInsertDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestInsertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
