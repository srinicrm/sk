import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = 'https://erp.kasjewellery.com/index.php/'; // Example API endpoint

  constructor(private http: HttpClient) { }
    // Example: Get all posts
    getPosts(): Observable<any> {
      return this.http.get(`${this.apiUrl}mobile_api/terms_and_conditions`);
    }
  

}
