import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {throwError} from 'rxjs';
import {retry, catchError, tap} from 'rxjs/operators';

//cach su dung service
@Injectable({
  providedIn: 'root'
  //provide the service at the root level (AppModule)
  // angular creates a single, shared instance of service and injects into any class that asks for it
})
export class StaffService {
  private REST_API_SERVER = "http://localhost:3003/user";
  public first: string = "";
  public prev: string = "";
  public next: string = "";
  public last: string = "";

  constructor(private httpClient: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  parseLinkHeader(header) {
    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach(p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });

    this.first = links["first"];
    this.last = links["last"];
    this.prev = links["prev"];
    this.next = links["next"];
  }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER, {
      params: new HttpParams({fromString: "_page=1&_limit=20"}),
      observe: "response",
    }).pipe(retry(4), catchError(this.handleError), tap(res => {
      this.parseLinkHeader(res.headers.get('Link'));
    }));
  }

  public sendGetRes() {
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }

  public sendGetRequestToUrl(url: string) {
    return this.httpClient.get(url, {observe: "response"}).pipe(retry(3), catchError(this.handleError)
    );
  }
}
