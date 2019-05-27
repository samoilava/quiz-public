import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private _url: string = '/assets/db.json';

  constructor(private _http: HttpClientModule) { }
}
