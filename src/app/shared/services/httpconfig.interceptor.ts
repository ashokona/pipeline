
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from './token.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(
        public toastr: ToastrService,
        private tokenService: TokenService,
        private userService: UserService
    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: any = this.tokenService.getToken();
        const group = this.tokenService.getGroup();

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', `${group}/${token}`) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        // request = request.clone({ headers: request.headers.set('xReqId', uuid()) });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401 || error.status === 403) {
                    this.userService.signout();
                }
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                return throwError(error);
            }));
    }
}
