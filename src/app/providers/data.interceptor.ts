import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const modifiedReq = request.clone({
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200',
      }),
    });
    console.log(modifiedReq);

    return next.handle(modifiedReq);
    return next.handle(request);
  }
}
