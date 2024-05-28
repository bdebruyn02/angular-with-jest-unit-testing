import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ExerciesService } from '../../services/exercies.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-test-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, MatProgressBarModule, CommonModule],
  templateUrl: './test-dialog.component.html',
  styleUrl: './test-dialog.component.scss'
})
export class TestDialogComponent implements OnInit{
  service = inject(ExerciesService);
  list: Array<string> = [];
  isLoading = false;

  ngOnInit(): void {
    this.fetchData();
  }


  private async fetchData() {
    try {
      this.isLoading = true;
      const result = await this.service.getCollection();

      if(result) this.list = result;
    } catch (error) {
      if(error instanceof HttpErrorResponse) console.error(error.error);
        else console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

}
