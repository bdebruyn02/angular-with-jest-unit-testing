import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciesService {
  httpClient = inject(HttpClient);

  getCollection() {
    return lastValueFrom(this.httpClient.get<Array<string>>(`${environment.api}/exercises/equipmentList`));
  }
}
