import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('open dialog test', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const openDialogSpy = spyOn(app.dialog, 'open').and.returnValue(
      { afterClosed: () => of(true)} as MatDialogRef<typeof TestDialogComponent>)

    app.openDialog();
    expect(openDialogSpy).toBeDefined();
  });

  // it(`should have the 'jasmine-testing' title`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('jasmine-testing');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, jasmine-testing');
  // });
});
