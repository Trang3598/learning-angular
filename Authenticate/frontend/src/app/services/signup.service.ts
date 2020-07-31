import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../../../../../CRUD/crud/src/app/services/message.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {User} from "../../../../../CRUD/crud/src/app/model/user";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  PHP_API_SERVER = environment.host;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ApiService: ${message}`);
  }

  signUp(form: any) {
    return this.httpClient.post(`${this.PHP_API_SERVER}/signup`, form).pipe(catchError(this.handleError<User>('signup')));
  }
}
