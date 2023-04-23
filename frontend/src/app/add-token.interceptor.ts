import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { StateService } from './services/state.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  private state = inject(StateService);
  private subscription!: Subscription;

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    const token = this.state.getToken();
    if (token) {
      const clone = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });

      return next.handle(clone);
    } else {
      return next.handle(request);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
