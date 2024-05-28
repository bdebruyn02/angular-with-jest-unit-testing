import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { TestDialogComponent } from './test-dialog.component';
import { ExerciesService } from '../../services/exercies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { inject } from '@angular/core';
import { of } from 'rxjs';

describe('TestDialogComponent', () => {
  let component: TestDialogComponent;
  let fixture: ComponentFixture<TestDialogComponent>;
  let getCollection: ReturnType<typeof jasmine.createSpyObj>;
  let collection: Array<string>;
  
  beforeEach(async () => {
    const exerciseService = jasmine.createSpyObj('ExerciesService', ['getCollection']);
    getCollection = exerciseService.getCollection.and.returnValue(of(collection));

    await TestBed.configureTestingModule({
      imports: [TestDialogComponent, BrowserAnimationsModule],
      providers: [{provide: ExerciesService, useValue: exerciseService}]
    })
    .compileComponents();

    
    fixture = TestBed.createComponent(TestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
