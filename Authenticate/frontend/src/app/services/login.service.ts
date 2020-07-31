import {Injectable} from '@angular/core';
import {environment} from "../../../../../CRUD/crud/src/environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../../../../../CRUD/crud/src/app/services/message.service";
import {Observable, of} from "rxjs";
import {User} from "../../../../../CRUD/crud/src/app/model/user";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  PHP_API_SERVER = environment.host;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ApiService: ${message}`);
  }

  login(form: any) {
    return this.httpClient.post(`${this.PHP_API_SERVER}/login`, form).pipe(
      catchError(this.handleError<User>('login'))
    );
  }
}
