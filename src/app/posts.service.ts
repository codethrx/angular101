import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/utils';
import { Observable } from 'rxjs';
import { Posts } from 'src/interface';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getData(): number[] {
    return [100, 1000, 10000];
  }
  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(url);
  }
}
