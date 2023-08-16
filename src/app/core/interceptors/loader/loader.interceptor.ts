import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '@core/services';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(LoaderService);
  loader.loading = true;
  return next(req).pipe((response) => {
    loader.loading = false;
    return response;
  });
};
