import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../model/user";
import {catchError, tap} from "rxjs/operators";
import {MessageService} from "./message.service";
import {Category} from "../model/category";
import {Post} from "../model/post";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = environment.host;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private messageService: MessageService) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a ApiService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ApiService: ${message}`);
  }

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/danh-sach-nguoi-dung`)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.PHP_API_SERVER}/danh-sach-nguoi-dung/${id}`;
    return this.httpClient.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /** GET users whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.httpClient.get<User[]>(`${this.PHP_API_SERVER}/danh-sach-nguoi-dung/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found users matching "${term}"`) :
        this.log(`no users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }

  /** POST: add a new user to the server */
  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.PHP_API_SERVER}/danh-sach-nguoi-dung/`, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /** DELETE: delete the user from the server */
  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.PHP_API_SERVER}/danh-sach-nguoi-dung/${id}`;

    return this.httpClient.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /** PUT: update the user on the server */
  updateUser(user: User): Observable<any> {
    return this.httpClient.put(`${this.PHP_API_SERVER}/danh-sach-nguoi-dung/` + user.id, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /** GET: show the user on the server */
  showUser(user: User): Observable<any> {
    const id = typeof user === 'number' ? user : user.id;
    return this.httpClient.get(`${this.PHP_API_SERVER}/danh-sach-nguoi-dung/${id}`).pipe(
      tap(_ => this.log(`show user id=${user.id}`)),
      catchError(this.handleError<any>('showUser'))
    );
  }

  login(user: User) {
    return this.httpClient.post(`${this.PHP_API_SERVER}/danh-sach-nguoi-dung/login`, user, this.httpOptions).pipe(
      tap(_ => this.log(`show user id=${user.id}`)),
      catchError(this.handleError<any>('showUser'))
    );
  }


  /** GET users from the server */
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.PHP_API_SERVER}/danh-sach-danh-muc`)
      .pipe(
        tap(_ => this.log('fetched categories')),
        catchError(this.handleError<Category[]>('getCategories', []))
      );
  }

  deleteCategory(category: Category | number): Observable<Category> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this.PHP_API_SERVER}/danh-sach-danh-muc/${id}`;

    return this.httpClient.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted category id=${id}`)),
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }

  /** GET users from the server */
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.PHP_API_SERVER}/danh-sach-bai-dang`)
      .pipe(
        tap(_ => this.log('fetched posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }
}



