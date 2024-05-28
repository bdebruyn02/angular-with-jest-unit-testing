import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jasmine-testing';
  dialog = inject(MatDialog)
  

  openDialog() {
    const dialogRef = this.dialog.open(TestDialogComponent, {
      width: '600px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
