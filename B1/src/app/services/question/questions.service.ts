import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {catchError, retry, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private REST_API_SERVER = "http://localhost:3002/questions";

  constructor(private httpClient: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER, {
      observe: "response",
    }).pipe(retry(4), catchError(this.handleError));
  }

}
