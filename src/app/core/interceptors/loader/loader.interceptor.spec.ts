import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loaderInterceptor } from './loader.interceptor';

describe('loaderInterceptor', () => {
  it('should be created', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptors([loaderInterceptor]))],
    });
    expect(loaderInterceptor).toBeTruthy();
  });
});
