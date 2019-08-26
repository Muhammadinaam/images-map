import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const isRegisterOrLoginUrl = request.url.indexOf('register') != -1 || request.url.indexOf('oauth/token') != -1;
        return next.handle(request).pipe(catchError(err => {
            
            if (err.status === 401) {

                if(isRegisterOrLoginUrl) {
                    alert(err['error']['message']);
                }

                // auto logout if 401 response returned from api
                this.authService.logout();
            }

            if (err.status === 422) {
                let errorString = '';

                Object.keys(err.error.errors).forEach(key => {
                    err.error.errors[key].forEach(error => {
                        errorString += error + " ";
                    })
                })
                alert(errorString);
            }

            const error = err.message || err.error.message || err.statusText;
            
            alert(error);
            
            return throwError(error);
        }))
    }
}