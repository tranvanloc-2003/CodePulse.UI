import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (shouldInterceptRequest(req)) {
    const cookieServices = inject(CookieService);
    const authToken = cookieServices.get('Authorization');
    
    // Kiểm tra xem token có tồn tại không
    if (authToken) {
      const authRequest = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });
      return next(authRequest);
    }
  }
  return next(req);

  function shouldInterceptRequest(request: any): boolean {
    return request.urlWithParams.indexOf('AddAuth=true', 0) > -1;
  }
};


