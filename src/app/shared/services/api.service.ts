import { Injectable, Inject, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private http: HttpClient,
    // private injector: Injector,
    private tokenService: TokenService,
    // @Inject(Injector) private injector: Injector
  ) { }

  private handleError(error: HttpErrorResponse) {
    // const tokenService = this.injector.get(TokenService);
    // const router = this.injector.get(Router);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if (error.status === 401 || error.status === 333) {
        this.tokenService.destroyToken();
        // this.router.navigate(['/login'])
      }
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    if (this.tokenService.getToken()) {
      return new HttpHeaders({ 'Authorization': 'JWT ' + this.tokenService.getToken(), 'Content-Type': 'application/json', 'Accept': 'application/json'});
    } else {
      return new HttpHeaders(headersConfig);
    }
  }

  get(path: string, params?: HttpParams): Observable<any> {
    return this.http.get(`${environment.BaseUrl}${path}`, {params: params});
    // .pipe(
    //   catchError(this.handleError.bind(this))
    // );
  }

  options(path: string, params?): Observable<any> {
    return this.http.options(`${environment.BaseUrl}${path}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  post(path: string, data?): Observable<any> {
    return this.http.post(`${environment.BaseUrl}${path}`, data);
    // .pipe(
    //   catchError(this.handleError.bind(this))
    // );
  }

  delete(path: string, data?, params?): Observable<any> {
    return this.http.delete(`${environment.BaseUrl}${path}`, data);
    // .pipe(
    //   catchError(this.handleError.bind(this))
    // );
  }

  patch(path: string, body): Observable<any> {
    return this.http.patch(`${environment.BaseUrl}${path}`, body);
    // .pipe(
    //   catchError(this.handleError.bind(this))
    // );
  }
}
