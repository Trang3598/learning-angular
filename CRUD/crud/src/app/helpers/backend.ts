import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';
import {User} from "../model/user";


const users: User[] = [{id: 1, name: 'test', password: 'test', email: 'test@gmail.com'}];

// @Injectable()
export class Backend implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function getListUser(): void {
      this.apiService.getUsers().subscribe(users => {
        this.users = users
      })
    }

    function handleRoute() {
      switch (true) {
        case url.endsWith('/dang-nhap') && method === 'POST':
          return authenticate();
        case url.endsWith('/auth') && method === 'GET':
          return getUsers();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const {name, password} = body;
      const user = users.find(x => x.name === name && x.password === password);
      if (!user) return error('Username or password is incorrect');
      return ok({
        id: user.id,
        username: user.name,
        email: user.email,
        token: 'fake-jwt-token'
      })
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({status: 200, body}))
    }

    function error(message) {
      return throwError({error: {message}});
    }

    function unauthorized() {
      return throwError({status: 401, error: {message: 'Unauthorised'}});
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: Backend,
  multi: true
};
