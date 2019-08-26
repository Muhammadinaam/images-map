import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        
        const addToken = request.url.indexOf('oauth/token') == -1;
        if (this.authService.isLoggedIn() && addToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            });
        }

        return next.handle(request);
    }
}