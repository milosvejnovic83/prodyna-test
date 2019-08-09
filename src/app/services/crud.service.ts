import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

const endpoint = 'http://jsonplaceholder.typicode.com/posts';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPosts(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  addPost (post): Observable<any> {
    return this.http.post<any>(endpoint, JSON.stringify(post), httpOptions).pipe(
      tap((post) => console.log(`added post ` + JSON.stringify(post))),
      catchError(this.handleError<any>('addPost'))
    );
  }

  deletePost (id): Observable<any> {
    return this.http.delete<any>(endpoint + "/" + id, httpOptions).pipe(
      tap(_ => console.log(`deleted post id=${id}`)),
      catchError(this.handleError<any>('deletePost'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);  
      return of(result as T);
    };
  }

}
