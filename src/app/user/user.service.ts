import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import IUser from './models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly usersUrl =
    'https://64444b85914c816083b7b344.mockapi.io/users';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(this.usersUrl)
      .pipe(catchError(this.handleError));
  }
  deleteUsers(users: string[]) {
    if (users.length === 0) {
      return;
    }
    users.forEach((userId) => {
      this.http
        .delete<IUser>(
          'https://64444b85914c816083b7b344.mockapi.io/users/' + userId
        )
        .subscribe(() => console.log('userId', userId));
    });
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
