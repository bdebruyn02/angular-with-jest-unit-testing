import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const httpAuthInterceptor: HttpInterceptorFn = (req, next) => {
 
  let key =  environment.apiKey;
  let host =  environment.apiHost;

  if(req.method === 'JSONP') {
    return next(req);
  }

  if(key && host) req = req.clone({
    setHeaders: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': environment.apiHost
    }
  });

  return next(req);
};
